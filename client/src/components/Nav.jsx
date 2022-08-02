import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/restaurants'>Restaurant</NavLink>
      <NavLink to='/add'>Add A Restauarant</NavLink>
    </nav>
  )
}

export default Nav
