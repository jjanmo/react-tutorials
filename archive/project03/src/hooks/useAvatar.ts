import { minidenticon } from 'minidenticons'

interface Props {
  uid: string
}

export default function useAvatar({ uid }: Props) {
  const getDefaultAvatar = () =>
    'data:image/svg+xml;utf8,' + encodeURIComponent(minidenticon(uid, 40, 40))

  // make default avatar
  // https://github.com/laurentpayot/minidenticons
  // update avatar

  return {
    getDefaultAvatar,
  }
}
