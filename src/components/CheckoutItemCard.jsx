const CheckoutItemCard = ({ setItems, item }) => {
  function updateQuantity(productId, newQuantity) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  if (item.quantity < 1) {
    setItems((prev) => prev.filter((product) => product.id !== item.id));
    return;
  }

  return (
    <div className="relative border border-black rounded-lg flex items-center p-3">
      <img src={item.image} className="w-24 h-32" />
      <div className="p-3 w-full">
        <h1 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-600 pb-2 sm:block hidden">{item.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="size-5 text-2xl bg-blue-700 text-white rounded-full flex justify-center items-center"
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="size-5 text-2xl bg-blue-700 text-white rounded-full flex justify-center items-center"
            >
              +
            </button>
          </div>
          <h1 className="text-xl font-semibold">
            ${item.price * item.quantity}
          </h1>
        </div>
      </div>
      <button
        onClick={() => updateQuantity(item.id, 0)}
        className="absolute top-2 right-2 bg-blue-500 text-white flex justify-center items-center rounded-lg text-xs size-4"
      >
        X
      </button>
    </div>
  );
};

export default CheckoutItemCard;
