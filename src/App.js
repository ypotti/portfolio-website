import React, { useState, createContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Connect from "./components/Connect";

export const PageContext = createContext();

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");
  return (
    <>
      <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
        <Navbar />
        <Home />
        <Work />
        {/* <About />
      <Connect /> */}
      </PageContext.Provider>
    </>
  );
}

export default App;
