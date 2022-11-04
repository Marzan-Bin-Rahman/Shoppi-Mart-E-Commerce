import React, {useEffect} from "react";
import Carousel from "./Components/Commons/Carousel";
import Navbar from "./Components/Commons/Navbar";
import Home from "./Components/FetchProduct/Home";

function App() {
  
  return (
    <div>
      <Navbar />
      <Carousel />
      <Home />
    </div>
  );
}

export default App;
