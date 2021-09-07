import { NavLink } from 'react-router-dom'
import './index.css'

export default () => {
  return (
    <section className="header">
      <section className="title">
        <h2>Routes Example</h2>
      </section>
      <section className="links">
        <NavLink className="default" activeClassName="selected" to="/about">About</NavLink>
        <NavLink className="default" activeClassName="selected" to="/profile">Profile</NavLink>
        <NavLink className="default" activeClassName="selected" to="/users">Users</NavLink>
      </section>
    </section>
  )
}