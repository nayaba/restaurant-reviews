import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <h1>Grammable Eats</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/restaurants">Restaurant</NavLink>
        <NavLink to="/add">Add A Restauarant</NavLink>
      </div>
    </nav>
  )
}

export default Nav
