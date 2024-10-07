import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Checkout from "./pages/Checkout";

function App() {
  const [products, setproducts] = useState([]);
  const [category, setCategory] = useState("");
  const [addedToCart, setAddedToCart] = useState([]);

  function addToCart(product) {
    if (addedToCart.includes(product)) {
    } else {
      setAddedToCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=20");
        const data = await res.json();
        data.map((elem) => setproducts((prev) => [...prev, elem]));
        console.log(data);
      } catch {
        alert("there was an error");
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Router>
        <Header addedToCart={addedToCart} />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="/shop"
            element={
              <Shop
                category={category}
                setCategory={setCategory}
                products={products}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                itemsInCart={addedToCart}
                setItemsInCart={setAddedToCart}
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
