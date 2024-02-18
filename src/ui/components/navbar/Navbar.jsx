import { NavLink } from "react-router-dom"
import '/src/ui/sass/app.scss';

const Navbar = () => {
  return (
<nav>
    <NavLink to="/">
    Router <span>Connect</span>
    </NavLink>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
</nav> 
 )
}

export default Navbar