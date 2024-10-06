const ItemsDisplay = ({ category, products }) => {
  return (
    <div className="text-center">
      <h2 className="col-span-2 p-3">{category.toUpperCase()}</h2>
      <div className="grid grid-cols-2 grid-rows-3 gap-1">
        {products
          .filter((product) => product.category == category)
          .slice(0, 4)
          .map((product) => (
            <img src={product.image} key={product.id} className="w-24 h-28" />
          ))}
      </div>
    </div>
  );
};

export default ItemsDisplay;
