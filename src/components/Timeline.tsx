import { useState } from "react";
import FlickeringGrid from "./Grid";
import { AnimatedList } from "./TimelineList";
import Notification from "./TimelineNotification";
import { CoolMode } from "./Particles";

const notifications = [
  {
    name: "Crescendo Eve",
    description: "DAY 0",
    time: "22-01-2025",
    icon: "🎸",
    color: "#00C9A7",
  },
  {
    name: "Faranhite",
    description: "DAY 1",
    time: "23-01-2025",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Fusion Night",
    description: "DAY 2",
    time: "24-01-2025",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Felicity Night",
    description: "DAY 3",
    time: "25-01-2025",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

const colorList = [
  "#fff",
  "#91db7b",
  "#8eedc1",
  "#81ded2",
  "#97cde6",
  "#5b7ade",
];

const Timeline = () => {
  const [color, setColor] = useState("#fff");

  setInterval(() => {
    const index = Math.floor(Math.random() * colorList.length);
    setColor(colorList[index]);
  }, 5000);

  return (
    <div
      className="relative min-h-screen w-full bg-[#111] text-white flex flex-col gap-[5vh]"
      id="timeline"
    >
      <FlickeringGrid
        className="absolute inset-0 size-full w-[101%] bg-[#111]"
        squareSize={2}
        gridGap={10}
        color={`${color}`}
        maxOpacity={0.4}
        flickerChance={1}
      />

      <h2 className="text-center relative pt-[13vh] text-[5vw] font-orbitron font-semibold ">
        TIMELINE
      </h2>

      <div className="relative flex h-[60vh] w-full flex-col p-6 overflow-hidden bg-transparent">
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>

        <div className="w-full absolute flex justify-center -z-50">
          <CoolMode>
            <button
              className="z-0 pointer-events-none"
              id="timeline-particles-btn"
            >
            </button>
          </CoolMode>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
