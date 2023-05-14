import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'
import { quiz } from '../../constants/quiz'
import * as S from './Quiz.style'

export default function Quiz() {
  return (
    <DndContext>
      <S.Container>
        <S.ImageContainer>
          {quiz.map((question) => (
            <Droppable key={question.image} id={question.image}>
              <img src={question.image} width={160} height={90} alt="quiz" />
            </Droppable>
          ))}
        </S.ImageContainer>

        <S.TextContainer>
          {quiz.map((question) => (
            <Draggable key={question.text} id={question.text}>
              <S.Text>{question.text}</S.Text>
            </Draggable>
          ))}
        </S.TextContainer>
      </S.Container>
    </DndContext>
  )
}

function Droppable({ id, children }: { id: string; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({ id })
  const style = {
    color: isOver ? 'green' : undefined,
  }

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  )
}

function Draggable({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  )
}

// https://www.drupal.org/project/quiz_drag_drop
// https://www.youtube.com/watch?v=7HUCAYMylCQ
