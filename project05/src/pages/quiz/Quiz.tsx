import { List } from '@mui/material'
import { data } from './data'
import Question from './Question'

function Quiz() {
  return (
    <form>
      <List>
        {data.map((item, order) => (
          <Question key={order} {...item} order={order} />
        ))}
      </List>
      <button type="submit">제출</button>
    </form>
  )
}

export default Quiz
