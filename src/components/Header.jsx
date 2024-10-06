import { Link } from "react-router-dom";

const Header = ({ addedToCart }) => {
  return (
    <header className="flex justify-between items-center p-5">
      <div className="flex items-center gap-8">
        <h1 className="hover:tracking-wide ease-in duration-300 text-2xl text-blue-700 sm:text-3xl md:text-4xl">
          Frosted Soul
        </h1>
        <Link
          to="/"
          className="hover:scale-110 ease-in duration-300 text-sm sm:text-base md:text-lg"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="hover:scale-110 ease-in duration-300 text-sm sm:text-base md:text-lg"
        >
          Shop
        </Link>
      </div>
      <img
        src="data:image/png;base64,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"
        alt="shopping cart"
        className="size-8 cursor-pointer"
      ></img>
      <p className="rounded-full bg-blue-700 font-bold text-white text-xs pr-1 pl-1 absolute right-5 top-10">
        {addedToCart.length > 0 && addedToCart.length}
      </p>
    </header>
  );
};

export default Header;
