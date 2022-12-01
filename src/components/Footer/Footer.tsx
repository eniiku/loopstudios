import logoIcon from '../../assets/images/logo.svg';

const footerLinks = ['about', 'careers', 'events', 'products', 'support'];
const footerIcons = [
  { text: 'facebook', iconLink: '/src/assets/images/icon-facebook.svg' },
  { text: 'twitter', iconLink: '/src/assets/images/icon-twitter.svg' },
  { text: 'pinterest', iconLink: '/src/assets/images/icon-pinterest.svg' },
  { text: 'instagram', iconLink: '/src/assets/images/icon-instagram.svg' },
];

const Footer = () => {
  return (
    <footer>
      <img src={logoIcon} alt='Loopstudios Logo' />

      <ul>
        {footerLinks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>

      <ul>
        {footerIcons.map((icon) => (
          <li key={icon.text}>
            <img
              src={icon.iconLink}
              alt={`Loopstudios ${icon.text} social media handle`}
            />
          </li>
        ))}
      </ul>

      <caption>&#169; 2021 Loopstudios. All rights reserved.</caption>
    </footer>
  );
};

export default Footer;
