import { Fragment, useState } from 'react';

import logoIcon from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/icon-hamburger.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import './Navbar.scss';

const navLinks = ['about', 'careers', 'events', 'products', 'support'];

const Menu = ({ closeMenu }: { closeMenu: () => void }): JSX.Element => {
  return (
    <div className='nav__menu'>
      <div className='nav__menu-header'>
        <img src={logoIcon} alt="loopstudio's Logo Icon" />
        <button role='navigation' onClick={closeMenu} className='nav__btn'>
          <img src={closeIcon} role='presentation' />
        </button>
      </div>
      <ul className='nav__menu-list'>
        {navLinks.map((link) => (
          <li key={link} className='nav__menu-list-items heading-text'>
            {link}
          </li>
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
      <nav className='nav'>
        <img
          src={logoIcon}
          alt="loopstudio's Logo Icon"
          className='nav__logo'
        />

        {/* Desktop Navbar Layout */}

        <ul className='nav__links'>
          {navLinks.map((navLink) => (
            <li key={navLink} className='nav__links-items'>
              {navLink}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu for Mobile Nav */}

        <button role='navigation' onClick={handleOpenMenu} className='nav__btn'>
          <img src={menuIcon} role='presentation' />
        </button>
      </nav>
      {isMenuOpen && <Menu closeMenu={handleCloseMenu} />}
    </Fragment>
  );
};

export default Navbar;
