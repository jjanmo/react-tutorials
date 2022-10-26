import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate('/', { replace: true })}>
      ← Back
    </Container>
  );
}

const Container = styled.button`
  all: unset;

  padding: 0.5rem;
  border-radius: 5px;
  font-size: 18px;
  color: #c7ecee;
  background-color: #130f40;

  text-transform: uppercase;
`;
