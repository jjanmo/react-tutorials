import { Container, List, ListItem, ListItemIcon } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import DragHandleIcon from '@mui/icons-material/DragHandle'

export default function Rbd() {
  const todos = [
    {
      id: 1,
      content: '자바스크립트 공부하기',
    },
    {
      id: 2,
      content: 'D3 튜터리얼 하기!',
    },
    {
      id: 3,
      content: 'CSS 공부하기!',
    },
  ]

  const handleDragEnd = () => {}

  return (
    <Container
      sx={{
        backgroundColor: '#4C9AFF',
        width: '100vw',
        minHeight: 'calc(100vh - 60px)',
        padding: '1rem',
      }}
    >
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
                        <ListItemIcon
                          {...provided.dragHandleProps}
                          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                          <DragHandleIcon />
                        </ListItemIcon>
                        {todo.content}
                      </ListItem>
                    )}
                  </Draggable>
                ))}
              </List>
            )}
          </Droppable>
        </Container>
      </DragDropContext>
    </Container>
  )
}
