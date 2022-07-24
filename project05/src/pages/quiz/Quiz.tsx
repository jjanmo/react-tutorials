import { data } from './data'
import Question from './Question'

function Quiz() {
  return (
    <form>
      {data.map((item, order) => {
        return (
          <div>
            <div>{item.question}</div>
            <ul>
              {item.options.map((option, index) => (
                <Question key={option} order={order} index={index} option={option} />
              ))}
            </ul>
          </div>
        )
      })}
      <button type="submit">제출</button>
    </form>
  )
}

export default Quiz
