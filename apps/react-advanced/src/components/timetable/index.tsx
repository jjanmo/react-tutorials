import { useId } from 'react'
import Cell from '@/components/timetable/Cell'
import styled from 'styled-components'

const headerCols = ['월', '화', '수', '목', '금', '토', '일']
// const headerRows = [
//   '5:30',
//   '6:00',
//   '6:30',
//   '7:00',
//   '7:30',
//   '8:00',
//   '8:30',
//   '9:00',
//   '9:30',
//   '10:00',
//   '20:00',
//   '20:30',
//   '21:00',
//   '21:30',
//   '22:00',
//   '22:30',
//   '23:00',
//   '23:30',
//   '24:00',
// ]

const Timetable = () => {
  const id = useId()
  return (
    <Container>
      <Header>
        {headerCols.map((day) => (
          <Cell key={`${id}-${day}`} content={day} isHeader />
        ))}
      </Header>
    </Container>
  )
}

export default Timetable

const Container = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
`
