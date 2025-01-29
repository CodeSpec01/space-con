import { Event } from "../constants";
import GlowingButton from "./GlowingButton";

const Card = ({ data, className }: { data?: Event; className?: string }) => {
  return (
    <div
      className={`w-[70vw] md:w-[30vw] bg-[#1f1f1f] p-6 pt-1 rounded-xl flex flex-col gap-3 justify-between ${className} `}
    >
      <div>
        <h3 className="text-[#6356fd] text-center text-[7vw] font-semibold py-1 md:text-[3vw] ">
          {data!.name.toUpperCase()}
        </h3>
        <img
          src={data!.image}
          alt="Event Image"
          className={"rounded-lg w-full object-cover m-auto"}
        />
      </div>
      <p className="font-extralight text-[3.5vw] md:text-[1vw]">
        {data!.description}
      </p>
      <div className="md:text-[1.2vw] text-[5vw] ">
        <span>
          <strong className="text-[#6356fd]">DATE :</strong> {data!.date}
        </span>
        <br />
        {data?.startTime && data.endTime ? (
          <>
            <span>
              <strong className="text-[#6356fd]">TIMING</strong> :{" "}
              {data.startTime} - {data.endTime}
            </span>
            <br />
          </>
        ) : null}
        <span>
          <strong className="text-[#6356fd]">PRIZE :</strong> {data!.prize}
        </span>
        <br />
        <span>
          <strong className="text-[#6356fd]">VENUE :</strong> {data!.venue}
        </span>
        <br />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center mt-1 gap-2 md:gap-0 justify-around">
        <a
          href={data!.ruleBook}
          className="flex items-center gap-2 bg-green-500/30 hover:bg-[#333333] w-fit p-3 rounded-xl py-2 transition-all duration-300"
          onClick={() => {
            console.log(data);
          }}
        >
          <span className="custom-arrow-pointer ">RuleBook</span>
          <span className="custom-arrow-pointer bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center text-center invert ">
            &#8599;
          </span>
        </a>
        {data?.comingSoon ? (
          <>
            <div className="cursor-not-allowed flex items-center gap-2 bg-black/50 hover:bg-[#333333] w-fit p-3 rounded-xl py-2 transition-all duration-300">
              <span className="cursor-not-allowed">Register Now!</span>
              <span className="cursor-not-allowed bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center text-center invert ">
                &#8599;
              </span>
            </div>
          </>
        ) : (
          <>
            <a
              href={data!.link}
              className="flex items-center gap-2 w-fit p-3 rounded-xl py-2 transition-all duration-300"
            >
              <GlowingButton text="Register Now!" />
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
