const ItemCard = ({ product, addToCart }) => {
  return (
    <div className="border border-black rounded p-3 w-44 flex flex-col justify-center">
      <img src={product.image} className="w-24 h-32 place-self-center" />
      <p className="mt-2 text-gray-400">
        {product.description.slice(0, 40) + "..."}
      </p>
      <div className="flex justify-between items-center mt-1">
        <h2 className="text-sm">$ {product.price}</h2>
        <button
          onClick={() => addToCart(product)}
          className="border rounded border-blue-700 p-1 pr-2 pl-2 text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
