import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState<Events[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("start fetching data");

        const response = await fetch(import.meta.env.VITE_API);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setData(data);
        console.log("data fetched");
        console.log(data);

        setTimeout(() => {
          setLoading(false);
          console.log("timeout complete");
          setTimeout(() => {
            document.getElementById("page-loader")?.click();

            // loader.style.opacity = "0";
            document.getElementById("spacecon-title")?.click();
            document.getElementById("spacecon-subtitle")?.click();

            console.log("ran second timeout");
            // loader.style.display = "none";
          }, 1000);
        }, 1000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader id="loading-state-loader" />;
  }

  return (
    <>
      <Loader id="page-loader" />
      <div
        id="main-content"
        className="transition-all duration-1000 overflow-hidden -z-50"
      >
        <Hero />
        <Timeline />
        <Events data={data!} />
        <About />
        <Contact />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
