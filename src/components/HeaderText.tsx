// src/components/Header/HeaderText.tsx
import './HeaderText.css';

import { name, devRoles } from '../data/headerTextData';

const HeaderText: React.FC = () => (
  <div id="header-text">
    <h1>
      Hi, I'm <span className="silver-text">{name}</span> Pervan
    </h1>
    <ul className="dev-list">
      {devRoles.map((role) => (
        <li key={role}>{role}</li>
      ))}
    </ul>
  </div>
);

export default HeaderText;
