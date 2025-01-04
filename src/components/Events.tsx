import DownArrow from "./DownArrow";
import EventDisplay from "./EventDisplay";
import Meteors from "./Meteors";
import { VelocityScroll } from "./ScrollVelocity";

const Events = () => {
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
        className=" text-center font-bold tracking-[-0.02em] text-[13vw] md:text-[5vw] leading-[5vh] bg-[#2f2f2f] py-4"
      />
      <VelocityScroll
        text="x Nakshatra x TDS"
        default_velocity={-4}
        className=" text-center font-bold tracking-[-0.02em] text-[13vw] md:text-[5vw] leading-[5vh] bg-[#2f2f2f] py-6"
      />
      <div className="">
        <EventDisplay />
      </div>
      <a href="/events" className="rounded-3xl bg-gray-800 py-2 px-3 invert hover:invert-0 text-[4vw] md:text-[1.5vw] mb-10 ">
        All Events &#8599;
      </a>
      <DownArrow href="#about" className="relative pt-4" />
    </div>
  );
};

export default Events;
