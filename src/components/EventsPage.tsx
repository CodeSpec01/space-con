import Card from "./Card";
import { allEvents } from "../constants";

const EventsPage = () => {
  return (
    <>
      <div
        id="main-content"
        className="transition-all duration-1000 -z-50 overflow-x-hidden "
      >
        <h2 className="text-white text-center relative mt-[10vh] md:mt-[13vh] text-[12vw] md:text-[7vw] tracking-wider font-semibold ">
          All Events
        </h2>
        <div className="w-[95%] flex flex-wrap m-auto md:justify-around justify-center gap-y-10 text-white ">
          {allEvents?.map((event, i) => (
            <Card className="w-[90vw]" data={event} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
