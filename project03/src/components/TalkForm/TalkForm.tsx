import { database } from '@config/firebase'
import useAuthContext from '@context/auth'
import { addDoc, collection } from 'firebase/firestore'
import { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

interface DefaultValue {
  text: string
  image: FileList[]
}

export default function TalkForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { handleSubmit, watch, register } = useForm<DefaultValue>()
  const { user } = useAuthContext()

  console.log(watch())

  const onSubmit = async () => {
    const { text: message, image } = watch()
    console.log(message)

    try {
      const docRef = await addDoc(collection(database, 'tweet'), {
        user: user.displayName || user.email,
        userId: user.uid,
        message,
        createdAt: Date.now(),
      })
      console.log('Document written with ID: ', docRef.id)

      if (image) {
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
