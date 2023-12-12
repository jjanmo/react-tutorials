import { database } from '@config/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

interface Koalang {
  id: string
  userId: string
  user: string
  message: string
  image: string
  createdAt: number
}

export default function TalkList() {
  const [koalangs, seKoalangs] = useState<Koalang[]>()

  useEffect(() => {
    const fetchQuery = async () => {
      const koalangsQuery = query(collection(database, 'koalangs'), orderBy('createdAt', 'desc'))
      const snapshots = await getDocs(koalangsQuery)
      seKoalangs(
        snapshots.docs.map((doc) => {
          const { userId, user, message, image, createdAt, id } = doc.data()
          return {
            id,
            userId,
            user,
            message,
            image,
            createdAt,
          }
        })
      )
    }

    fetchQuery()
  }, [])

  return <div>{JSON.stringify(koalangs)}</div>
}
