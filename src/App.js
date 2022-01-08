import "./App.css";
import Home from "./pages/Home/Home.js";
import "./fonts/Marisa-Regular.ttf";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    import("./fonts/Marisa-Regular.ttf");
  });
  return (
    <>
      <Home />
    </>
  );
}

export default App;
