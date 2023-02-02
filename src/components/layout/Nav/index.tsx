import { NavLink } from 'react-router-dom';
import './styles.scss'

const NavBar = ( ) => {
    return (
      <div className="btn-nav">
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signin">Signin</NavLink>

      
      </div>
    );
  };
  
export { NavBar };