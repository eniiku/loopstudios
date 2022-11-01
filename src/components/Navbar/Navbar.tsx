import { Fragment } from 'react';

import logoIcon from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/icon-hamburger.svg';
import closeIcon from '../../assets/images/icon-close.svg';

const navLinks = ['about', 'careers', 'events', 'products', 'support'];

export const Menu = () => {
  return (
    <div>
      <div>
        <img src={logoIcon} alt="loopstudio's Logo Icon" />
        <button role='navigation'>{closeIcon}</button>
      </div>
      <ul>
        {navLinks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <img src={logoIcon} alt="loopstudio's Logo Icon" />

        <button role='navigation'>
          <img src={menuIcon} role='presentation' />
        </button>
      </nav>
      <Menu />
    </Fragment>
  );
};

export default Navbar;
