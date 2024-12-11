import DownArrow from "./DownArrow";
import { EventsList } from "./EventsList";
import Meteors from "./Meteors";
import { VelocityScroll } from "./ScrollVelocity";

type Events = {
  title: string;
  description: string;
  img: string;
  date: string;
  time: string;
  venue: string;
  unstopLink: string;
};

const Events = ({ data }: { data: Events[] }) => {
  return (
    <div
      className="relative min-h-screen bg-[#111] text-white flex flex-col items-center"
      id="events"
    >
      <Meteors number={50} />
      <h2 className="text-center pt-[12vh] font-orbitron text-[4vw] font-bold ">
        EVENTS
      </h2>
      <VelocityScroll
        text="SPACECON EVENTS ."
        default_velocity={2}
        className="font-orbitron text-center font-bold tracking-[-0.02em]text-white text-[3vw] leading-[5vh] bg-[#2f2f2f] py-1"
      />
      <VelocityScroll
        text="x NAKSHATRA x TDS"
        default_velocity={-4}
        className="font-orbitron text-center font-bold tracking-[-0.02em]text-white text-[3vw] leading-[5vh] bg-[#2f2f2f] py-1"
      />
      <EventsList data={data} />
      <DownArrow href="#about" className="relative pt-4" />
    </div>
  );
};

export default Events;
