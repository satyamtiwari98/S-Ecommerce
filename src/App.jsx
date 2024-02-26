import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <Header />
      <h1 className="bg-orange-600 p-11 mt-9">Satyam Tiwari</h1>
      <Login />
      <hr></hr>
      <Signup />
    </>
  );
}

export default App;
