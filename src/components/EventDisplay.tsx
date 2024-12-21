import { useState } from "react";
import Card from "./Card";
import Events from "./Events";

const EventDisplay = ({ data }: { data: Events[] }) => {
  const [activeEle, setActiveEle] = useState(1);

  return (
    <div className="my-[5vh] flex justify-center relative overflow-hidden w-[100vw] gap-[1vw]">
      <button
        className="custom-arrow-pointer z-40 absolute top-[30vh] left-[2%] "
        onClick={() => {
          if (activeEle > 0) {
            setActiveEle(activeEle - 1);
          } else {
            setActiveEle(data.length - 1);
          }
        }}
      >
        <img
          src="/leftArrow.svg"
          alt="Prev"
          className="bg-[#fff1db] rounded-full p-3 custom-arrow-pointer"
        />
      </button>
      <div className="relative flex justify-center gap-[1vw] items-center ">
        {data.map((event, i) => (
          <div
            className={`${
              activeEle === i ? "relative" : "absolute"
            } top-0 transition-all duration-500 ease-in-out`}
            style={{
              left: `${(i - activeEle) * 100}%`,
              zIndex: `${activeEle === i ? 10 : 0}`,
              transform: `rotateY(${Math.abs(activeEle - i) * 50}deg) rotateZ(${
                (activeEle - i) * 10
              }deg) rotateX(${(activeEle - i) * 10}deg)`,
              opacity: `${
                activeEle === i ? 1 : 0.09 - Math.abs(activeEle - i) / 100
              }`,
              // scale: `${activeEle === i ? "1" : Math.abs(activeEle - i) * 0.8}`, 
              //  activeele = 5, i = 5, 5-0 0.5 5-1 0.4 5-2 0.3 5-3 0.2 5-4 0.1 5-5 0 5-6 0.1 5-7 0.2 5-8 0.3 5-9 0.4 5-10 0.5
              //   transform: `${activeEle === i ? "scale(1.1)" : "scale(1)"}`,
            }}
          >
            <Card data={event} key={i} />
          </div>
        ))}
      </div>
      <button
        className="custom-arrow-pointer z-40 absolute top-[30vh] right-[2%]"
        onClick={() => {
          if (activeEle < data.length - 1) {
            setActiveEle(activeEle + 1);
          } else {
            setActiveEle(0);
          }
        }}
      >
        <img
          src="/rightArrow.svg"
          alt="Next"
          className="bg-[#fff1db] rounded-full p-3 custom-arrow-pointer"
        />
      </button>
    </div>
  );
};

export default EventDisplay;
