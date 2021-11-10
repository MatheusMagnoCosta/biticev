import classes from './NavBar.module.css'
import NavLinks from "./NavLinks";
import {CgClose} from 'react-icons/cg';
import {FiMenu} from 'react-icons/fi';
import {useState} from 'react'
const MobileNavigation: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [close, setClose] = useState("true")



  const humbuger_icons =  <FiMenu className={classes.Hamburger} size='30px' color='white' onClick={() => setOpen(!open)} />

  const close_icons =  <CgClose className={`${classes.Hamburger} ${classes.Close} ${close}`} size='30px' color='white' onClick={() => setOpen(!open)}> </CgClose>
  const closeMobileMenu = () => setOpen(false)
  return (
  <nav className={classes.MobileNavigation}>
    {open? close_icons:humbuger_icons}
    {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
  </nav>
  )
};

export default MobileNavigation;
