import { useState } from "react";
import Card from "./Card";
import { mainEvents } from "../constants";

const EventDisplay = () => {
  const [activeEle, setActiveEle] = useState(Math.floor(mainEvents.length / 2));

  return (
    <div className="my-[5vh] flex justify-center relative overflow-hidden w-[100vw] gap-[1vw]">
      <button
        className="custom-arrow-pointer z-40 absolute top-[30vh] left-[2%] "
        onClick={() => {
          if (activeEle > 0) {
            setActiveEle(activeEle - 1);
          } else {
            setActiveEle(mainEvents.length - 1);
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
        {mainEvents.map((event, i) => (
          <div
            key={i}
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
            }} 
          >
            <Card data={event} key={i} />
          </div>
        ))}
      </div>
      <button
        className="custom-arrow-pointer z-40 absolute top-[30vh] right-[2%]"
        onClick={() => {
          if (activeEle < mainEvents.length - 1) {
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
