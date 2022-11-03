import { Fragment, useState } from 'react';

import logoIcon from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/icon-hamburger.svg';
import closeIcon from '../../assets/images/icon-close.svg';

const navLinks = ['about', 'careers', 'events', 'products', 'support'];

const Menu = ({ closeMenu }: { closeMenu: () => void }): JSX.Element => {
  return (
    <div>
      <div>
        <img src={logoIcon} alt="loopstudio's Logo Icon" />
        <button role='navigation' onClick={closeMenu}>
          {closeIcon}
        </button>
      </div>
      <ul>
        {navLinks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <Fragment>
      <nav>
        <img src={logoIcon} alt="loopstudio's Logo Icon" />

        <button role='navigation' onClick={handleOpenMenu}>
          <img src={menuIcon} role='presentation' />
        </button>
      </nav>
      {isMenuOpen && <Menu closeMenu={handleCloseMenu} />}
    </Fragment>
  );
};

export default Navbar;
