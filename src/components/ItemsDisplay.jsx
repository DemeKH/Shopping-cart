const ItemsDisplay = ({ category, products }) => {
  return (
    <div className="text-center">
      <h2 className="p-2 w-full">{category.toUpperCase()}</h2>
      <div className="grid grid-cols-2 justify-items-center gap-y-1">
        {products
          .filter((product) => product.category == category)
          .slice(0, 4)
          .map((product) => (
            <img
              src={product.image}
              key={product.id}
              className="w-16 h-20 md:w-20 md:h-28 lg:w-24 lg:h-32 xl:w-32 xl:h-36"
            />
          ))}
      </div>
    </div>
  );
};

export default ItemsDisplay;
