export default function About() {
  return (
    <div className="container mx-auto">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        recusandae nobis nam laborum ex voluptatum sit harum autem nisi
        distinctio voluptatem officiis at veritatis sapiente, ipsam reiciendis
        ipsum accusamus itaque.
      </p>
      <div className="">
        <div className="flex justify-center items-center w-full min-h-fit fixed top-[50%] left-0">
          <img
            className="absolute animate-clockwise"
            src="/src/assets/Asset 1.png"
            alt=""
            height="100"
          />
          <img
            className="absolute animate-anticlockwise"
            src="/src/assets/Asset 2.png"
            alt=""
            height="100"
          />
        </div>
      </div>
    </div>
  );
}
