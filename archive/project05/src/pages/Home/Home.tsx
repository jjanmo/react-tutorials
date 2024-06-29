import styled from '@emotion/styled'
import Layout from '../../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Container>
        <h1>다양한 리액트 라이브러리 경험기</h1>
      </Container>
    </Layout>
  )

  // data -> cards -> card flow

  //
}

// https://codepen.io/DivineBlow/pen/ZEBqNZb

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
  overflow: hidden;
`
