import { createFileRoute, Link } from '@tanstack/react-router'
import styled from 'styled-components'

export const Route = createFileRoute('/todos/')({
  component: () => <Todos />,
})

const Todos = () => {
  const todos = [
    { id: '1', title: 'Task 1', description: 'Task 1 description' },
    { id: '2', title: 'Task 2', description: 'Task 2 description' },
    { id: '3', title: 'Task 3', description: 'Task 3 description' },
  ]

  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <div>{todo.title}</div>
            <div>
              <ViewButton to="/todos/$todoId" params={{ todoId: todo.id }}>
                View
              </ViewButton>
              <EditButton to="/todos/$todoId/edit" params={{ todoId: todo.id }}>
                Edit
              </EditButton>
            </div>
          </TodoItem>
        ))}
      </ul>
    </Container>
  )
}

export default Todos

const Container = styled('div')`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`

const TodoItem = styled.li`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  list-style: none;
`

const ViewButton = styled(Link)`
  width: 50px;
  display: inline-block;
  text-align: center;
  padding: 0.3rem 0.6rem;
  margin-right: 1rem;
  border-radius: 0.25rem;
  background-color: #3498db;
  color: #fff;
  font-size: 0.8rem;
`

const EditButton = styled(Link)`
  width: 50px;
  display: inline-block;
  text-align: center;
  padding: 0.3rem 0.6rem;
  border-radius: 0.25rem;
  background-color: #2ecc71;
  color: #fff;
  font-size: 0.8rem;
`
