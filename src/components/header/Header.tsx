import Nav from './nav/Nav';
import HeaderText from './headerText/HeaderText';
import styles from './Header.module.css';
const Header: React.FC = () => {
  return (
    <div id={styles.header}>
      <Nav />
      <HeaderText />
    </div>
  );
};
export default Header;
