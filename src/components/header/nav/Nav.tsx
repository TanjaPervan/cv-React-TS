import { navLinks } from './navLinkData';
import './Nav.module.css';

const Nav: React.FC = () => (
  <div>
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Nav;
