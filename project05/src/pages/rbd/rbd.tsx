import { Container, List, ListItem, ListItemIcon } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import { useRecoilState } from 'recoil'
import { todosState } from '../../modules/todos/atoms'
import * as S from './rbd.style'

export default function Rbd() {
  const [todos, setTodos] = useRecoilState(todosState)

  const handleDragEnd = (args: any) => {
    console.log(args)
  }

  return (
    <S.SBox>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Container
          sx={{
            backgroundColor: '#EBECF0',
            width: '300px',
            minHeight: '20vh',
            margin: 0,
          }}
        >
          <Droppable droppableId="1">
            {(provided, snapshot) => (
              <List ref={provided.innerRef} {...provided.droppableProps}>
                {todos.map((todo) => (
                  <Draggable key={todo.id} draggableId={`${todo.id}`} index={todo.id}>
                    {(provided, snapshot) => (
                      <ListItem ref={provided.innerRef} {...provided.draggableProps}>
                        <ListItemIcon {...provided.dragHandleProps}>
                          <DragHandleIcon />
                        </ListItemIcon>
                        {todo.content}
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </Container>
      </DragDropContext>
    </S.SBox>
  )
}
