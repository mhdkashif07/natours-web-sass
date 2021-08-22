import React from "react";
import About_us from "./components/About_us";
import Home from "./pages/Home";
import '../src/css/style.css'
import Features_list from "./components/Features_list";
import Tours from "./components/Tours";

function App() {
  return (
    <div className="App">
      <Home />
      <About_us />
      <Features_list />
      <Tours />
    </div>
  );
}

export default App;
