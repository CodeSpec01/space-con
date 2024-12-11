import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Timeline from "./components/Timeline";
import Events from "./components/Events";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(import.meta.env.VITE_API);
        // if (!response.ok) {
        //   throw new Error("Failed to fetch");
        // }
        // const data = await response.json();
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
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
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Loader />
      <div
        id="main-content"
        className="transition-all duration-1000 overflow-hidden h-screen -z-50"
      >
        <Hero />
        <Timeline />
        <Events />
        <div className="min-h-screen bg-[#111] text-white" id="about">
          about us
        </div>
        <div className="min-h-screen bg-[#111] text-white" id="contact">
          contact us
        </div>
      </div>
    </>
  );
}

export default App;
