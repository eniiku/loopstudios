import logoIcon from '../../assets/images/logo.svg';
import './Footer.scss';

const footerLinks = ['about', 'careers', 'events', 'products', 'support'];
const footerIcons = [
  { text: 'facebook', iconLink: '/src/assets/images/icon-facebook.svg' },
  { text: 'twitter', iconLink: '/src/assets/images/icon-twitter.svg' },
  { text: 'pinterest', iconLink: '/src/assets/images/icon-pinterest.svg' },
  { text: 'instagram', iconLink: '/src/assets/images/icon-instagram.svg' },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-desktop-1'>
        <img src={logoIcon} alt='Loopstudios Logo' className='footer__logo' />

        <ul className='footer__icons-desktop'>
          {footerIcons.map((icon) => (
            <li key={icon.text}>
              <img
                src={icon.iconLink}
                alt={`Loopstudios ${icon.text} social media handle`}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className='footer-desktop-2'>
        <ul className='footer__link'>
          {footerLinks.map((link) => (
            <li key={link} className='footer__link-item'>
              {link}
            </li>
          ))}
        </ul>

        <ul className='footer__icons'>
          {footerIcons.map((icon) => (
            <li key={icon.text}>
              <img
                src={icon.iconLink}
                alt={`Loopstudios ${icon.text} social media handle`}
              />
            </li>
          ))}
        </ul>

        <p className='footer__caption'>
          &#169; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
