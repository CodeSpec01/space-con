import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [data, setData] = useState<Events[] | undefined>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setData(data);

        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            document.getElementById("page-loader")?.click();
            document.getElementById("spacecon-title")?.click();
            document.getElementById("spacecon-subtitle")?.click();
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
        className="transition-all duration-1000 -z-50 overflow-x-hidden "
      >
        <Hero />
        <Timeline />
        {loading ? <></> : <Events data={data!} />}
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
