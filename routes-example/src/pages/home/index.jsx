import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default () => {
  const { state } = useLocation()

  return (
    <section>
      <h2>Home page</h2>
      {state && (
        <p>Name: {state.name} ({state.id})</p>
      )}
      <Link to="/about">To About</Link><br />
      <Link to="/profile">To Profile</Link><br />
      <Link to="/users">To Users</Link>
    </section>
  )
}