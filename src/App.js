import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import About from "./components/About";
import Connect from "./components/Connect";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Work />
      <About />
      <Connect /> */}
    </div>
  );
}

export default App;
