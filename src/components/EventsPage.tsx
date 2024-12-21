import { useEffect, useState } from "react";
import Events from "./Events";
import Loader from "./Loader";
import Card from "./Card";

const EventsPage = () => {
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
        <h2 className="text-white text-center relative mt-[10vh] md:mt-[13vh] text-[12vw] md:text-[7vw] tracking-wider font-semibold ">
          All Events
        </h2>
        <div className="w-[95%] flex flex-wrap m-auto md:justify-between justify-center gap-y-10 text-white ">{data?.map((event, i) => (
          <Card className="w-[90vw]" data={event} key={i} />
        ))}</div>
      </div>
    </>
  );
};

export default EventsPage;
