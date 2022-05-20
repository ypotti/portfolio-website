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
  const [HomeOffset, setHomeOffset] = useState(null);
  const [workOffset, setWorkOffset] = useState(null);
  const [aboutOffset, setAboutOffset] = useState(null);
  const [connectOffset, setConnectOffset] = useState(null);
  const [pageOffset, setPageOffset] = useState(null);
  const [lastOffsetValue, setLastOffsetValue] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPageOffset(window.scrollY);
    });
  }, []);

  useEffect(() => {
    if (pageOffset < 50) {
      setSelectedPage("Home");
    } else if (lastOffsetValue < pageOffset) {
      if (pageOffset > connectOffset) {
        setSelectedPage("Connect");
      } else if (pageOffset > aboutOffset - 50) {
        setSelectedPage("About");
      } else if (pageOffset > workOffset - 50) {
        setSelectedPage("Work");
      }
    } else {
      if (pageOffset < aboutOffset + 50) {
        setSelectedPage("Work");
      } else if (pageOffset < workOffset + 50) {
        setSelectedPage("Home");
      } else if (pageOffset < connectOffset + 50) {
        setSelectedPage("About");
      }
    }
    setLastOffsetValue(pageOffset);
  }, [pageOffset, setPageOffset]);

  return (
    <>
      <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
        <Navbar />
        <Home setHomeOffset={setHomeOffset} />
        <Work setWorkOffset={setWorkOffset} />
        <About setAboutOffset={setAboutOffset} />
        <Connect setConnectOffset={setConnectOffset} />
      </PageContext.Provider>
    </>
  );
}

export default App;
