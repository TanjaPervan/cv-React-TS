import Nav from './nav/Nav';
import HeaderText from './headerText/HeaderText';
import styles from './Header.module.css';
import bgImage from '/background-img.jpg';

const Header: React.FC = () => {
  const style = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className={styles.header} style={style}>
      <Nav />
      <HeaderText />
    </div>
  );
};
export default Header;
