import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

function PageWrapper({ children, title }: PropsWithChildren<Props>) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

export default PageWrapper;

const Container = styled.section`
  width: 50%;
  height: 100vh;
  padding: 1rem 0;
  margin: auto;
`;
const Title = styled.h1`
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 3rem;
`;
