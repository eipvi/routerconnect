import { NavLink } from "react-router-dom"
import '/src/ui/sass/app.scss';
import Avatar from '/src/public/img/cr.png';


const Navbar = () => {
  return (
<nav className="navbar">
    <ul className="link-list">
      <li >
        <NavLink to="/" className="navlink">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="navlink">About</NavLink>
      </li>
      </ul>
      <NavLink to="/" className="brand bavbar-container">
      <img src={Avatar} alt="Router Connect" className="logo" />
    </NavLink>
      <ul className="link-list">
      <li>
        <NavLink to="/login" className="navlink">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register" className="navlink">Register</NavLink>
      </li>
    </ul>
</nav> 
 )
}

export default Navbar