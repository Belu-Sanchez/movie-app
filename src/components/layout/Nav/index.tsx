import { NavLink } from 'react-router-dom';
import { Aside } from '../Aside';
import './styles.scss'

const NavBar = ( ) => {
    return (
      <div className="btn-nav">
        <Aside />
        {/* <NavLink to="/estrenos">Estrenos</NavLink> */}
      </div>
    );
  };
  
export { NavBar };