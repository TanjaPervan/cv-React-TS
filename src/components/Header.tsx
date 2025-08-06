import Nav from "./Nav";
import HeaderText from "./HeaderText";
import './Header.css'
import '../styles/index.css'



const Header: React.FC = () => {
return(
    <div id="header">

     
        <Nav />
        <div >
        <HeaderText />
        </div>
    </div>
);
};
export default Header;


