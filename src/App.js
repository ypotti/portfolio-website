import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Connect from "./components/Connect";
import AOS from "aos";
import "aos/dist/aos.css";

export const PageContext = createContext();

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
        <Navbar />
        <Home />
        <Work />
        <About />
        <Connect />
      </PageContext.Provider>
    </>
  );
}

export default App;
