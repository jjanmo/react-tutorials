import { SocialType } from '@@types/auth'
import COLOR from '@style/colors'
import styled from 'styled-components'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'

interface Props {
  type: SocialType
  text: string
  onClick: () => void
}

export default function SocialButton({ type, text, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      {type === 'google' && <FcGoogle size={30} />}
      {type === 'github' && <BsGithub size={26} color={COLOR.BLACK} />}
      {text}
    </Container>
  )
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  border: none;
  font-size: 1.8rem;
  border-radius: 5px;
  border: 1px solid ${COLOR.PRIMARY_040};
  background-color: ${COLOR.WHITE};
  color: ${COLOR.PRIMARY_040};
  cursor: pointer;

  & svg {
    margin-right: 2rem;
  }
`
