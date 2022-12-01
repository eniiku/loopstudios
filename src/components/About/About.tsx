import aboutImage from '../../assets/images/mobile/image-interactive.jpg';

const About = () => {
  return (
    <section>
      <img
        src={aboutImage}
        alt='User interacting with virtual reality project'
      />
      <div>
        <h1>the leader in interactive vr</h1>
        <p>
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
