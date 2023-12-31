import { useRouteError } from 'react-router-dom'
import style from './Error.module.css'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className={style.error} id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
