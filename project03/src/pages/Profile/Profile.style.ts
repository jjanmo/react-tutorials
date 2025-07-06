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

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
