import { List, ListItem, ListItemIcon } from '@mui/material'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import { useRecoilState } from 'recoil'
import { todosState } from '../../modules/todos/atoms'
import * as S from './rbd.style'

export default function Rbd() {
  const [todos, setTodos] = useRecoilState(todosState)

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return

    const newTodos = [...todos]
    const [srcTodo] = newTodos.splice(source.index, 1)
    newTodos.splice(destination.index, 0, srcTodo)
    setTodos(newTodos)
  }

  return (
    <S.SBox>
      <DragDropContext onDragEnd={handleDragEnd}>
        <S.SContainer>
          <Droppable droppableId="1">
            {(provided, snapshot) => (
              <List ref={provided.innerRef} {...provided.droppableProps}>
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
                    {(provided, snapshot) => (
                      <S.SListItem ref={provided.innerRef} {...provided.draggableProps}>
                        <ListItemIcon {...provided.dragHandleProps}>
                          <DragHandleIcon />
                        </ListItemIcon>
                        {todo.content}
                      </S.SListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </S.SContainer>
      </DragDropContext>
    </S.SBox>
  )
}
