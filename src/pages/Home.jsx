import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative h-screen overflow-hidden bg-center bg-cover
     bg-[url('src/assets/elden.jpg')]"
    >
      {/* <img
        src="src/assets/elden.jpg"
        alt="Full Screen"
        className="absolute inset-0 w-full h-full object-cover z-"
      /> */}
      <div className="absolute inset-0 bg-black bg-opacity-10 " />
      <div className="font-mono flex flex-row items-center justify-center h-full p-10 mt-40 gap-4">
        <h1 className="text-[#ffffff] text-4xl m-4 ">Pixel Realm</h1>
        <Link
          to="/shop"
          className="text-white text-3xl border border-[#002d2c] rounded-xl cursor-pointer z-10 p-3"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
