import './Creations.scss';

const creations = [
  {
    text: 'deep earth',
    image: {
      mobile: '/src/assets/images/mobile/image-deep-earth.jpg',
      desktop: '/src/assets/images/desktop/image-deep-earth.jpg',
    },
  },
  {
    text: 'night arcade',
    image: {
      mobile: '/src/assets/images/mobile/image-night-arcade.jpg',
      desktop: '/src/assets/images/desktop/image-night-arcade.jpg',
    },
  },
  {
    text: 'soccer team vr',
    image: {
      mobile: '/src/assets/images/mobile/image-soccer-team.jpg',
      desktop: '/src/assets/images/desktop/image-soccer-team.jpg',
    },
  },
  {
    text: 'the grid',
    image: {
      mobile: '/src/assets/images/mobile/image-grid.jpg',
      desktop: '/src/assets/images/desktop/image-grid.jpg',
    },
  },
  {
    text: 'from up above vr',
    image: {
      mobile: '/src/assets/images/mobile/image-from-above.jpg',
      desktop: '/src/assets/images/desktop/image-from-above.jpg',
    },
  },
  {
    text: 'pocket borealis',
    image: {
      mobile: '/src/assets/images/mobile/image-pocket-borealis.jpg',
      desktop: '/src/assets/images/desktop/image-pocket-borealis.jpg',
    },
  },
  {
    text: 'the curiosity',
    image: {
      mobile: '/src/assets/images/mobile/image-curiosity.jpg',
      desktop: '/src/assets/images/desktop/image-curiosity.jpg',
    },
  },
  {
    text: 'make it fisheye',
    image: {
      mobile: '/src/assets/images/mobile/image-fisheye.jpg',
      desktop: '/src/assets/images/desktop/image-fisheye.jpg',
    },
  },
];

const Creations = () => {
  return (
    <section className='creations app--container creations-font'>
      <div className='creations__head'>
        <h1 className='creations__head-text heading-text'>our creations</h1>
        <button className='creations__head-btn creations__btn'>see all</button>
      </div>
      <div className='creations__grid'>
        {/* Grid of Images for mobile view */}

        {creations.map((creation) => (
          <div
            key={creation.text}
            className='creations__grid-item creations__grid-item-mobile'
          >
            <img
              src={creation.image.mobile}
              alt={`placeholder image for ${creation.text}`}
              className='creations__grid-item-img'
            />
            <h1 className='creations__grid-item-text heading-text heading-text-white'>
              {creation.text}
            </h1>
          </div>
        ))}

        {/* Gird of images for desktop view */}

        {creations.map((creation) => (
          <div
            key={creation.text}
            className='creations__grid-item creations__grid-item-desktop'
          >
            <img
              src={creation.image.desktop}
              alt={`placeholder image for ${creation.text}`}
              className='creations__grid-item-img'
            />
            <h1 className='creations__grid-item-text'>{creation.text}</h1>
          </div>
        ))}
      </div>
      <button className='creations__btn creations__btn-mobile'>see all</button>
    </section>
  );
};

export default Creations;
