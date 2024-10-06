import ItemCard from "../components/ItemCard";
import SelectCategory from "../components/SelectCategory";

const Shop = ({ setCategory, products, category, addToCart }) => {
  return (
    <div>
      <SelectCategory setCategory={setCategory} />
      <div className="flex justify-center">
        <div
          className="grid justify-items-center grid-cols-2 gap-3 pl-18 pt-5 pb-5
      sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {category
            ? products
                .filter((product) => product.category == category)
                .map((product) => (
                  <ItemCard product={product} key={product.id} />
                ))
            : products.map((product) => (
                <ItemCard
                  product={product}
                  key={product.id}
                  addToCart={addToCart}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
