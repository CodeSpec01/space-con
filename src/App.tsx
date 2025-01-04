import "./App.css";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div
        id="main-content"
        className="transition-all duration-1000 -z-50 overflow-x-hidden h-screen "
      >
        <Loader id="loader" />
        <Hero />
        <Timeline />
        <Events />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
