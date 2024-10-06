import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          className="border border-black hover:bg-black hover:text-white ease-in-out duration-200 rounded-lg p-3 m-2 text-xl"
        >
          Shop Now
        </Link>
      </div>

      <div className="p-10 flex flex-row justify-between align-center">
        <div className="">
          <h2>Electronics</h2>
          {products
            .filter((product) => product.category === "electronics") // Filter electronics
            .slice(0, 4) // Take only the first 4
            .map((product) => (
              <img src={product.image} key={product.id} className="w-32 h-36" />
            ))}
        </div>
        <div>
          <h2>Men&apos;s Clothing</h2>
          {products
            .filter((product) => product.category === "men's clothing") // Filter electronics
            .slice(0, 4) // Take only the first 4
            .map((product) => (
              <img src={product.image} key={product.id} className="w-32 h-36" />
            ))}
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="">Women&apos;s Clothing</h2>
          {products
            .filter((product) => product.category === "women's clothing") // Filter electronics
            .slice(0, 4) // Take only the first 4
            .map((product) => (
              <img src={product.image} key={product.id} className="w-32 h-36" />
            ))}
        </div>
        <div>
          <h2>Jewelery</h2>
          {products
            .filter((product) => product.category === "jewelery") // Filter electronics
            .slice(0, 4) // Take only the first 4
            .map((product) => (
              <img src={product.image} key={product.id} className="w-32 h-36" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
