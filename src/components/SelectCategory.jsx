const SelectCategory = ({ setCategory }) => {
  return (
    <div className="bg-blue-700 flex justify-center gap-5 p-4 pr-10 pl-10">
      <p
        onClick={() => setCategory("")}
        className="text-white font-bold cursor-pointer rounded-lg border-white border-2 p-1 text-xs flex items-center text-center sm:text-sm sm:p-2"
      >
        All
      </p>
      <p
        onClick={() => setCategory("electronics")}
        className="text-white font-bold cursor-pointer rounded-lg border-white border-2 p-1 text-xs flex items-center text-center sm:text-sm sm:p-2"
      >
        Electronics
      </p>
      <p
        onClick={() => setCategory("men's clothing")}
        className="text-white font-bold cursor-pointer rounded-lg border-white border-2 p-1 text-xs flex items-center text-center sm:text-sm sm:p-2"
      >
        Men&apos;s clothing
      </p>
      <p
        onClick={() => setCategory("women's clothing")}
        className="text-white font-bold cursor-pointer rounded-lg border-white border-2 p-1 text-xs flex items-center text-center sm:text-sm sm:p-2"
      >
        Woman&apos;s clothing
      </p>
      <p
        onClick={() => setCategory("jewelery")}
        className="text-white font-bold cursor-pointer rounded-lg border-white border-2 p-1 text-xs flex items-center text-center sm:text-sm sm:p-2"
      >
        Jewelery
      </p>
    </div>
  );
};

export default SelectCategory;
