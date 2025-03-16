import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Model from "./components/Model";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlight />
      <Model />
    </main>
  );
};

export default App;
