import { Button, styled } from '@mui/material'
import { Container } from '@mui/system'
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  const navigate = useNavigate()

  const errorMessages: { [key: number]: string } = {
    404: "Sorry that page can't be found",
    500: 'Sorry, an unexpected error has occurred.\nPlease enter after a while',
  }

  const handleClick = () => {
    navigate('/')
  }

  return (
    <SContainer>
      {isRouteErrorResponse(error) ? (
        <>
          <h1>{error.status}</h1>
          <p>{errorMessages[error.status] || ''}</p>
        </>
      ) : (
        <p>Opps! Sorry </p>
      )}

      <Button variant="outlined" size="large" color="error" onClick={handleClick}>
        Go Home
      </Button>
    </SContainer>
  )
}

const SContainer = styled(Container)`
  width: 100%;
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 6rem;
    margin: 0;
  }
  p {
    font-size: 2.5rem;
  }
  button {
    font-weight: bold;
  }
`
