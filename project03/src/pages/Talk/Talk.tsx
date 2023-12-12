import TalkList from '@components/TalkList'
import TalkForm from '@components/TalkForm'
import * as CS from '../commom.style'

export default function Talk() {
  return (
    <CS.Container>
      <TalkList />
      <TalkForm />
    </CS.Container>
  )
}
