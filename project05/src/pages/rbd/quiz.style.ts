import styled from '@emotion/styled'

export const Container = styled.div`
  width: 50%;
  height: 500px;
  margin: 2rem;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  background-color: #ecf0f1;
`
export const ImageList = styled.div`
  display: flex;
  flex-direction: column;
`
export const ImageWrapper = styled.div`
  width: 120px;
  height: 100px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #95a5a6;
`
export const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
`
export const TextList = styled.div`
  display: flex;
  flex-direction: column;
`
export const Text = styled.div`
  width: 120px;
  height: 100px;
  margin: 10px;
  word-break: keep-all;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`
