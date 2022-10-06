import styled from 'styled-components';

export default function Title() {
  return (
    <Container>
      Post App with <b>ReactQuery</b>
    </Container>
  );
}

const Container = styled.h1`
  width: 50vw;
  text-align: center;
  font-size: 35px;
  padding: 20px 0;
  margin: auto;
  color: white;
  background: linear-gradient(269.95deg, #7560f8 29.81%, #4b74ff 181.83%);
`;
