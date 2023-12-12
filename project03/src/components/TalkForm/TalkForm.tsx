import { database, storage } from '@config/firebase'
import useAuthContext from '@context/auth'
import { addDoc, collection, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useForm } from 'react-hook-form'

interface DefaultValue {
  text: string
  image: FileList
}

export default function TalkForm() {
  const { handleSubmit, watch, register } = useForm<DefaultValue>()
  const { user } = useAuthContext()

  console.log(watch())

  const onSubmit = async () => {
    const { text: message, image } = watch()
    console.log(message)

    try {
      const docRef = await addDoc(collection(database, 'koalangs'), {
        user: user.displayName || user.email,
        userId: user.uid,
        message,
        createdAt: Date.now(),
      })
      console.log('Document written with ID: ', docRef.id)

      if (image) {
        const file = image[0]
        const locationRef = ref(storage, `images/${user.uid}/${docRef.id}`)
        const result = await uploadBytes(locationRef, file)
        const url = await getDownloadURL(result.ref)
        updateDoc(docRef, {
          image: url,
        })
      }
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea placeholder="koalang!" {...register('text')}></textarea>
      <div>
        <label htmlFor="file">add photo</label>
        <input type="file" id="file" accept="image/*" {...register('image')} />
      </div>

      <button type="submit">koala</button>
    </form>
  )
}
