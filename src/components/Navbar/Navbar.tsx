import logoIcon from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/icon-hamburger.svg';

const Navbar = () => {
  return (
    <nav>
      <img src={logoIcon} alt='loopstudios Logo Icon' />
      <button role='navigation'>
        <img src={menuIcon} role='presentation' />
      </button>
    </nav>
  );
};

export default Navbar;
