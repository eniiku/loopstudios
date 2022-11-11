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
    <section>
      <h1>our creations</h1>
      <div>
        {creations.map((creation) => (
          <div key={creation.text}>
            <img
              src={creation.image}
              alt={`placeholder image for ${creation.text}`}
            />
            <h1>{creation.text}</h1>
          </div>
        ))}
      </div>
      <button>see all</button>
    </section>
  );
};

export default Creations;
