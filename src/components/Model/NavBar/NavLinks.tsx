import {LiHTMLAttributes} from 'react'

interface InputProps extends LiHTMLAttributes<HTMLLIElement> {
  isMobile?: boolean;
  closeMobileMenu: () => (void) ;
  }

const NavLinks: React.FC<InputProps> = (props) => {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#home"> Home</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#quem-somos"> Quem Somos</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#servicos"> Serviços</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#time"> Time</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="#contato"> Contato</a>
      </li>
    </ul>)
};

export default NavLinks;
