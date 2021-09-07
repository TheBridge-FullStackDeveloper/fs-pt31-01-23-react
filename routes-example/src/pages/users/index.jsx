import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

export default () => {
  return (
    <section>
      <h2>Users Page</h2>
      <Link to={{
        pathname: `/users/${uuid()}`,
        state: { name: 'Molpe' }
      }}>To Details</Link><br />
      <Link to="/home">Back to Home</Link>
    </section>
  )
}