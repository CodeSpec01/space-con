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
      className="relative bg-[#111] text-white flex flex-col items-center"
      id="events"
    >
      <Meteors number={50} />
      <h2 className="text-center mt-[12vh] text-[8vw] md:text-[4vw] tracking-wider font-bold ">
        EVENTS
      </h2>
      <VelocityScroll
        text="SpaceCon Events ."
        default_velocity={2}
        className=" text-center font-bold tracking-[-0.02em]text-white text-[5vw] leading-[5vh] bg-[#2f2f2f] py-4"
      />
      <VelocityScroll
        text="x Nakshatra x TDS"
        default_velocity={-4}
        className=" text-center font-bold tracking-[-0.02em]text-white text-[5vw] leading-[5vh] bg-[#2f2f2f] py-6"
      />
      <h3 className="py-[8vh] text-[8vw] text-[#6356fd] ">Coming Soon</h3>
      <div className="hidden">
        <EventsList data={data} />
      </div>
      <DownArrow href="#about" className="relative pt-4" />
    </div>
  );
};

export default Events;
