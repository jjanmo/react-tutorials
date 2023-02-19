import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { images, texts } from './quiz.data'
import * as S from './quiz.style'
export default function Quiz() {
  const handleDragEnd = () => {}

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <S.Container>
        <S.ImageList>
          {images.map((image, index) => (
            <Droppable key={index} droppableId={`image-${index}`}>
              {(provided) => (
                <S.ImageWrapper {...provided.droppableProps}>
                  <S.Image src={image} alt="thumbnail" />
                </S.ImageWrapper>
              )}
            </Droppable>
          ))}
        </S.ImageList>
        {/* <S.TextList>
          {texts.map((text, index) => (
            <Draggable draggableId={text} index={index}>
              {(provided) => (
                <S.Text
                  key={text}
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                >
                  {text}
                </S.Text>
              )}
            </Draggable>
          ))}
        </S.TextList> */}
      </S.Container>
    </DragDropContext>
  )
}
