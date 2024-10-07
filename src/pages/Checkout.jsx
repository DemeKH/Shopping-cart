import CheckoutItemCard from "../components/CheckoutItemCard";

const Checkout = ({ itemsInCart, setItemsInCart }) => {
  if (itemsInCart.length === 0)
    return (
      <div className="w-full text-center">
        <h1 className="font-bold p-5 text-xl">Your Cart is empty!</h1>
      </div>
    );

  return (
    <div className="pr-10 pl-10 pt-5 pb-5 flex flex-col gap-y-5">
      <div className="flex flex-col gap-3">
        {itemsInCart.map((item) => (
          <CheckoutItemCard
            key={item.id}
            item={item}
            setItems={setItemsInCart}
          />
        ))}
      </div>
      <div className="bg-blue-500 p-3 flex justify-between items-center rounded-lg">
        <h1 className="text-white text-lg sm:text-2xl font-semibold">
          Total: $
          {itemsInCart.reduce(
            (acc, current) => acc + current.price * current.quantity,
            0
          )}
        </h1>
        <button
          className="ease-in-out duration-100 rounded-xl bg-white p-2 text-xl text-blue-700
        hover:bg-blue-700 hover:text-white"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
