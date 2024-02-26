const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-green-700 p-6">
      <div className="ml-4">
        <h2 className="cursor-pointer">S-Ecommerce</h2>
      </div>
      <div className="flex flex-row gap-4 mr-10">
        <div className="">
          <span className="cursor-pointer">Home</span>
        </div>
        <div>
          <span className="cursor-pointer">All Products</span>
        </div>
        <div>
          <span className="cursor-pointer">ContactUS</span>
        </div>
        <div>
          <span className="cursor-pointer">My Account</span>
        </div>
        <div>
          <span className="cursor-pointer">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
