import React from 'react'

function ErrorModal({
    errorMessage
}: {
    errorMessage: string | undefined,
    setMutateIsError: React.Dispatch<React.SetStateAction<boolean>>,
}) {
  return (
    <div>{errorMessage}</div>
  )
}

export default ErrorModal