import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";

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
          const ele = document.querySelector("#page-loader") as HTMLElement;
          const ele2 = document.querySelector("#main-content") as HTMLElement;

          ele.classList.add("h-screen");
          ele.style.opacity = "0";
          ele2.style.opacity = "1";
          document.getElementById("spacecon-title")?.click();
          document.getElementById("spacecon-subtitle")?.click();

          setTimeout(() => {
            ele.style.display = "none";
          }, 500);

          ele2.classList.remove("h-screen");
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Loader />
      <div
        id="main-content"
        className="transition-all duration-1000 overflow-hidden h-screen -z-50"
      >
        <Hero />
        <Timeline />
        <Events data={data!} />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
