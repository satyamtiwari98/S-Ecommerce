import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import User from "./Components/User";

function App() {
  return (
    <>
      <Header />
      <h1 className="bg-orange-600 p-11 mt-9">Satyam Tiwari</h1>
      <Login />
      <hr></hr>
      <Signup />
      <hr />
      <Home />
    </>
  );
}

export default App;
