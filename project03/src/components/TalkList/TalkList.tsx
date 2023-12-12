import { useEffect, useRef, useState } from 'react'
import { database } from '@config/firebase'
import { Unsubscribe, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import TalkItem from '@components/TalkItem'

interface Koalang {
  id: string
  userId: string
  user: string
  message: string
  image: string
  createdAt: number
}

export default function TalkList() {
  const [koalangs, setKoalangs] = useState<Koalang[]>()
  const unsubscribeRef = useRef<Unsubscribe>(null)

  useEffect(() => {
    const fetchQuery = async () => {
      const koalangsQuery = query(collection(database, 'koalangs'), orderBy('createdAt', 'desc'))

      // request once
      // const snapshots = await getDocs(koalangsQuery)
      // setKoalangs(
      //   snapshots.docs.map((doc) => {
      //     const { userId, user, message, image, createdAt } = doc.data()
      //     return {
      //       id : doc.id,
      //       userId,
      //       user,
      //       message,
      //       image,
      //       createdAt,
      //     }
      //   })
      // )

      // realtime event
      const unsubscribe = await onSnapshot(koalangsQuery, (snapshots) => {
        const koalangs = snapshots.docs.map((doc) => {
          const { userId, user, message, image, createdAt } = doc.data()
          return {
            id: doc.id,
            userId,
            user,
            message,
            image,
            createdAt,
          }
        })
        setKoalangs(koalangs)
      })
      unsubscribeRef.current = unsubscribe
    }

    fetchQuery()

    return () => {
      unsubscribeRef.current()
      console.log('cleanup!')
    }
  }, [])

  return (
    <div>
      {koalangs?.map((koalang) => (
        <TalkItem key={koalang.id} {...koalang} />
      ))}
    </div>
  )
}
