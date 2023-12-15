import styled from 'styled-components'

export const AvatarContainer = styled.div``
export const AvatarImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f5f5f5;
  border-radius: 50%;
  overflow: hidden;

  & img {
    object-fit: cover;
  }
`
