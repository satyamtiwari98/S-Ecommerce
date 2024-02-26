const Login = () => {
  return (
    <div className="flex flex-col items-center p-4 m-3 gap-5">
      <div>
        <h2 className="text-orange-700 text-2xl">Login</h2>
      </div>
      <div className="flex flex-col items-center gap-5">
        <form>
          <div className="p-5">
            <label>UserName </label>
            <input
              className="rounded-lg p-3 ml-4"
              type="text"
              placeholder="Enter your User Name "
            />
          </div>
          <div className=" flex flex-row gap-5 p-3 ml-4">
            <label>Password</label>
            <input
              className="rounded-lg p-3"
              type="password"
              placeholder="Enter your password "
            />
            <span>
              <button className="text-red-900 cursor-pointer">
                Show Password
              </button>
            </span>
          </div>
          <div className="flex justify-center p-5">
            <button
              className="cursor-pointer bg-slate-300 p-3 rounded-lg"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <span className="">
          <a href="satyam" className="text-red-900 cursor-pointer">
            Forget Password
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;
