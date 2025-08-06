import { navLinks } from '../data/navLink';
import './Nav.css'
import '../styles/index.css'


const Nav: React.FC = () => (
  <div className='navbar-content' >
  <nav >
    <ul >
      {navLinks.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </nav></div>
);

export default Nav;
