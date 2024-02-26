const Signup = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div>
        <h2 className="text-orange-700 text-2xl">SignUp</h2>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <form>
          <div className="p-3">
            <label>Name</label>
            <input
              className="rounded-lg p-3 ml-4"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="p-3">
            <label>UserName</label>
            <input
              className="rounded-lg p-3 ml-4"
              type="text"
              placeholder="Enter Your UserName"
            />
          </div>
          <div className="p-3">
            <label>Email</label>
            <input
              className="rounded-lg p-3 ml-4"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="p-3">
            <label>Mobile Number</label>
            <input
              className="rounded-lg p-3 ml-4"
              type="text"
              placeholder="Enter Your Mobile Number"
            />
          </div>
          <div className="p-3">
            <label>Password</label>
            <input
              className="rounded-lg p-3 ml-4"
              type="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="flex justify-center p-3">
            <button className="cursor-pointer bg-slate-300 p-3 rounded-lg">
              SingUp
            </button>
          </div>
        </form>
      </div>
      <div>
        <span>
          <a href="satyam" className="text-red-900 cursor-pointer">
            Login
          </a>
        </span>
      </div>
    </div>
  );
};

export default Signup;
