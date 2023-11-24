import React, { useEffect, useState } from 'react'
import './Toast.css'

export function Toast({ message, errorToast, time }) {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      {timer > 0 && (
        <>
          {!errorToast && <div className={"Toast"} id='successToast'>{message}</div>}
          {errorToast && <div className={"Toast"} id='errorToast'>{message}</div>}
        </>
      )}
    </>
  )
}
