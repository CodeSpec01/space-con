import Events from "./Events";

const Card = ({ data, className }: { data: Events, className?: string }) => {
  return (
    <div className={`w-[70vw] md:w-[30vw] bg-[#1f1f1f] p-6 pt-1 rounded-xl flex flex-col gap-3 justify-between ${className} `}>
      <div>
        <h3 className="text-[#6356fd] text-center text-[7vw] font-semibold pb-1 md:text-[3vw] ">
          {data.name.toUpperCase()}
        </h3>
        <img
          src={data.image}
          alt="Event Image"
          className="rounded-lg w-[90%] object-cover m-auto "
        />
      </div>
      <p className="">{data.description}</p>
      <div className="md:text-[1.2vw] text-[2.5vw] ">
        <span>Date : {data.date}</span>
        <br />
        <span>
          Timing : {data.startTime} - {data.endTime}
        </span>
        <br />
        <span>Prize : {data.prize}</span>
        <br />
        <span>Venue : {data.venue}</span>
        <br />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-0 justify-around">
        <a
          href={data.ruleBook}
          className="flex items-center gap-2 bg-green-500/30 hover:bg-[#333333] w-fit p-3 rounded-xl py-2 "
          onClick={() => {
            console.log(data);
          }}
        >
          <span className="custom-arrow-pointer ">RuleBook</span>
          <span className="custom-arrow-pointer bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center text-center invert ">
            &#8599;
          </span>
        </a>
        <a
          href={data.link}
          className="flex items-center gap-2 bg-black/50 hover:bg-[#333333] w-fit p-3 rounded-xl py-2 "
        >
          <span className="custom-arrow-pointer">Register Now!</span>
          <span className="custom-arrow-pointer bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center text-center invert ">
            &#8599;
          </span>
        </a>
      </div>
    </div>
  );
};

export default Card;
