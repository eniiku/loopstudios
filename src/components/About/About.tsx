import './About.scss';
import aboutImage from '../../assets/images/mobile/image-interactive.jpg';
import aboutImageDesktop from '../../assets/images/desktop/image-interactive.jpg';

const About = () => {
  return (
    <section className='about app--container'>
      {/* Image for Desktop view */}

      <img
        src={aboutImageDesktop}
        alt='User interacting with virtual reality project'
        className='about__img-desktop'
      />

      {/* Image for mobile view */}
      <img
        src={aboutImage}
        alt='User interacting with virtual reality project'
        className='about__img'
      />

      <div className='about__text'>
        <h1 className='about__text-head heading-text'>
          the leader in interactive vr
        </h1>
        <p className='about__text-body paragraph-text'>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses to through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default About;
