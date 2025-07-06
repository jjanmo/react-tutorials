import TalkList from '@components/TalkList'
import TalkForm from '@components/TalkForm'
import * as CS from '../commom.style'

export default function Talk() {
  return (
    <CS.Container>
      <TalkForm />
      <hr style={{ width: '100%', margin: '20px 0' }} />
      <TalkList />
    </CS.Container>
  )
}
