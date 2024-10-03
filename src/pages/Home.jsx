import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="src/assets/astronaut-tiger.jpeg"
        alt="Full Screen"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "blur(2.5px)" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-10" />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl absolute top-0 m-4 z-50">
          Pixel Realm
        </h1>
        <Link
          to="/shop"
          className="text-3xl text-white border border-black p-2 rounded-lg m-3 cursor-pointer z-50"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
