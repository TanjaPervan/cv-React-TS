import styles from './HeaderText.module.css';
import { name, devRoles } from './headerTextData';

const HeaderText: React.FC = () => (
  <div className={styles.headerText}>
    <h1>
      Hi, I'm <span className="silverText"> {name} </span> Pervan
    </h1>
    <ul className={styles.devList}>
      {devRoles.map((role) => (
        <li key={role}>{role}</li>
      ))}
    </ul>
  </div>
);

export default HeaderText;
