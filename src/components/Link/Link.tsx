import './Link.scss';

interface LinkProps {
  children: 'string';
}

const Link = (props) => {
  const { children } = props;

  return (
    <div className='link'>
      {children}
      <span aria-hidden className='link-animate'></span>
    </div>
  );
};

export default Link;
