export default function CircleAnimation(props) {
  return (
    <div
      // eslint-disable-next-line react/prop-types
      className={`flex justify-center items-center w-full min-h-fit fixed ${props.className} -z-10`}
    >
      <img
        className="absolute animate-anticlockwise"
        src="/src/assets/Asset 2.png"
        alt=""
        height="420"
        width="420"
      />
      <img
        className="absolute animate-clockwise"
        src="/src/assets/Asset 1.png"
        alt=""
        height="350"
        width="350"
      />
      <img
        className="absolute animate-anticlockwise"
        src="/src/assets/Asset 2.png"
        alt=""
        height="300"
        width="300"
      />
      <img
        className="absolute animate-clockwise"
        src="/src/assets/Asset 1.png"
        alt=""
        height="250"
        width="250"
      />
      <img
        className="absolute animate-anticlockwise"
        src="/src/assets/Asset 2.png"
        alt=""
        height="200"
        width="200"
      />
    </div>
  );
}
