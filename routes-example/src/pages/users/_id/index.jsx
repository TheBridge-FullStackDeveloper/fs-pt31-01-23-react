import { Link, useParams, useHistory, useLocation } from 'react-router-dom'

export default () => {
  const { id } = useParams()
  const history = useHistory()
  const { state } = useLocation()

  const goBack = () => {
    history.push('/users')
  }

  return (
    <section>
      <h2>User: {state.name} ({id})</h2>
      <Link to={{
        pathname: '/home',
        state: { name: 'Molpe', id }
      }}>Back to Home</Link><br /><br />
      <button onClick={goBack}>Go back</button>
    </section>
  )
}