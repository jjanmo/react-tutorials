import { Button, Link, styled } from '@mui/material'
import { Container } from '@mui/system'
import { isRouteErrorResponse, Link as RouterLink, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  const errorMessages: { [key: number]: string } = {
    404: "Sorry that page can't be found",
    500: 'Sorry, an unexpected error has occurred.\nPlease enter after a while',
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
      <Link component={RouterLink} to="/" underline="none">
        <Button variant="outlined" size="large" color="error">
          Go Home
        </Button>
      </Link>
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
