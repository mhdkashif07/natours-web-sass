import React from "react";
import About_us from "./components/About_us";
import Home from "./pages/Home";
import '../src/css/style.css'
import Features_list from "./components/Features_list";
import Tours from "./components/Tours";
import Stories_section from "./components/Stories_section";
import BookSection from "./components/BookSection";

function App() {
  return (
    <div className="App">
      <Home />
      <About_us />
      <Features_list />
      <Tours />
      <Stories_section />
      <BookSection />
    </div>
  );
}

export default App;
