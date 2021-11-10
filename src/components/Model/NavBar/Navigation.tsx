import NavLinks from "./NavLinks";
import classes from './NavBar.module.css'

const Navigation: React.FC = ({ children }) => {
  return (
    <nav className={classes.Navigation}>
    <NavLinks closeMobileMenu={() => null }/>
  </nav>
  )
};

export default Navigation;
