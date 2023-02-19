import { database } from '@config/firebase'
import useAuthContext from '@context/auth'
import { collection, addDoc } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import * as CS from '../commom.style'

interface DefaultValue {
  koalang: string
}

export default function Talk() {
  const { handleSubmit, watch, register } = useForm<DefaultValue>()
  const { user } = useAuthContext()

  const onSubmit = async () => {
    const message = watch('koalang')
    console.log(message)

    try {
      const docRef = await addDoc(collection(database, 'koalang'), {
        user: user.displayName || user.email,
        message,
        createdAt: Date.now(),
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <CS.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Koala~" {...register('koalang', { required: true })} />
      </form>
    </CS.Container>
  )
}
