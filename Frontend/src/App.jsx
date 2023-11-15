import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./AllRoutes/AllRoutes";
import img from "./assets/wallpaper.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="mainContainer" style={{ backgroundImage: `url(${img})` }}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
