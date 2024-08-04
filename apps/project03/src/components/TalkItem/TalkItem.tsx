import { Koalang } from '@components/TalkList'
import { database, storage } from '@config/firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import useAuthContext from '@context/auth'
import { deleteObject, ref } from 'firebase/storage'

export default function TalkItem({ message, user: useName, userId, id, image }: Koalang) {
  const { user } = useAuthContext()

  const handleDeleteClick = async () => {
    const notSameUser = user.uid !== userId
    const isDeleting = window.confirm('really delete it?')
    if (notSameUser || !isDeleting) return

    try {
      await deleteDoc(doc(database, 'koalangs', id))
      if (image) {
        const imageRef = ref(storage, `images/${user.uid}/${id}`)
        await deleteObject(imageRef)
      }
    } catch (e) {
      console.log(e)
    } finally {
    }
  }
  return (
    <div>
      <div>{message}</div>
      <div>{useName}</div>
      {user.uid === userId && <button onClick={handleDeleteClick}>Delete</button>}
    </div>
  )
}
