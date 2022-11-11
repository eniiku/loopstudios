import "./Creations.scss";

const creations = [
  {
    text: "deep earth",
    image: "/src/assets/images/mobile/image-deep-earth.jpg",
  },
  {
    text: "night arcade",
    image: "/src/assets/images/mobile/image-night-arcade.jpg",
  },
  {
    text: "soccer team vr",
    image: "/src/assets/images/mobile/image-soccer-team.jpg",
  },
  {
    text: "the grid",
    image: "/src/assets/images/mobile/image-grid.jpg",
  },
  {
    text: "from up above vr",
    image: "/src/assets/images/mobile/image-from-above.jpg",
  },
  {
    text: "pocket borealis",
    image: "/src/assets/images/mobile/image-pocket-borealis.jpg",
  },
  {
    text: "the curiosity",
    image: "/src/assets/images/mobile/image-curiosity.jpg",
  },
  {
    text: "make it fisheye",
    image: "/src/assets/images/mobile/image-fisheye.jpg",
  },
];

const Creations = () => {
  return (
    <section className="creations app--container">
      <h1 className="creations__head-text heading-text">our creations</h1>
      <div className="creations__grid">
        {creations.map((creation) => (
          <div key={creation.text} className="creations__grid-item">
            <img
              src={creation.image}
              alt={`placeholder image for ${creation.text}`}
              className="creations__grid-item-img"
            />
            <h1 className="creations__grid-item-text heading-text heading-text-white">
              {creation.text}
            </h1>
          </div>
        ))}
      </div>
      <button className="creations__btn">see all</button>
    </section>
  );
};

export default Creations;
