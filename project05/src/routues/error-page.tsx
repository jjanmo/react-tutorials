import { ConstructionOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  const errorMessages: { [key: number]: string } = {
    404: "Sorry that page can't be found",
    500: 'Sorry, an unexpected error has occurred.\nPlease enter after a while',
  }

  return (
    <div>
      {isRouteErrorResponse(error) ? (
        <>
          <h1>{error.status}</h1>
          <p>{errorMessages[error.status] || ''}</p>
        </>
      ) : (
        <p>Opps! Sorry </p>
      )}
    </div>
  )
}
