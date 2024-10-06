import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemsDisplay from "../components/ItemsDisplay";

const Home = () => {
  const [products, setproducts] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(1);

  useEffect(() => {
    async function fetchClothes() {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=20");
        const data = await res.json();
        data.map((elem) => setproducts((prev) => [...prev, elem]));
      } catch {
        alert("there was an error");
      }
    }
    fetchClothes();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselIndex === products.length - 2) {
        setCarouselIndex(1);
      } else {
        setCarouselIndex((prev) => prev + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [carouselIndex, products]);

  return (
    <div className="">
      <div className="flex justify-center items-center gap-10 sm:gap-32 p-5 m-5">
        {products.map((elem, index) => {
          if (index === carouselIndex) {
            return (
              <img src={elem.image} key={elem.image} className="w-44 h-52" />
            );
          } else if (index >= carouselIndex - 1 && index <= carouselIndex + 1) {
            return (
              <img src={elem.image} key={elem.image} className="w-32 h-36" />
            );
          }
        })}
      </div>
      <div className="flex flex-col items-center m-5 p-3">
        <p className="text-2xl m-3">Premium clothes at affordable Prices!</p>
        <Link
          to="/shop"
          className="border border-black hover:bg-black hover:text-white ease-in-out duration-200 rounded-lg p-4 mt-6 text-2xl"
        >
          Shop Now
        </Link>
      </div>

      <div className="pr-10 pl-10 flex flex-row justify-between align-center">
        <ItemsDisplay category="electronics" products={products} />
        <ItemsDisplay category="men's clothing" products={products} />
        <ItemsDisplay category="women's clothing" products={products} />
        <ItemsDisplay category="jewelery" products={products} />
      </div>
    </div>
  );
};

export default Home;
