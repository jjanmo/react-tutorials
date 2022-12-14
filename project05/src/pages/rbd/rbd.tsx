import { List, ListItem } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import draggableIcon from '../../assets/icons/draggable.png'

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
    <DragDropContext onDragEnd={handleDragEnd}>
      <div>
        <Droppable droppableId="1">
          {(provided, snapshot) => (
            <List ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo) => (
                <Draggable key={todo.id} draggableId={`${todo.id}`} index={todo.id}>
                  {(provided, snapshot) => (
                    <ListItem ref={provided.innerRef} {...provided.draggableProps}>
                      <img
                        src={draggableIcon}
                        {...provided.dragHandleProps}
                        alt="draggable-icon"
                        width={20}
                        height={50}
                      />
                      {todo.content}
                    </ListItem>
                  )}
                </Draggable>
              ))}
            </List>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}
