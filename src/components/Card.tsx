type Events = {
  title: string;
  description: string;
  img: string;
  date: string;
  time: string;
  venue: string;
  unstopLink: string;
};

const Card = ({ data }: { data: Events }) => {
  return (
    <div className="w-[70vw] md:w-[30vw] bg-[#1f1f1f] p-6 pt-1 rounded-xl flex flex-col gap-3 justify-center ">
      <div>
        <h3 className="text-[#6356fd] text-center text-[7vw] font-semibold pb-1 md:text-[3vw] ">{data.title.toUpperCase()}</h3>
        <img
          src={data.img}
          alt="Event Image"
          className="rounded-lg w-[90%] object-cover m-auto "
        />
      </div>
      <p className="">{data.description}</p>
      <div className="md:text-[1.2vw] text-[2.5vw] ">
        <span>
          Timing : {data.date} {data.time}
        </span>
        <br />
        <span>Venue : {data.venue}</span>
        <br />
      </div>
      <div className="w-full flex justify-center">
        <a
          href={data.unstopLink}
          className="flex items-center gap-2 hover:bg-[#333333] w-fit p-3 rounded-xl py-1 "
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
