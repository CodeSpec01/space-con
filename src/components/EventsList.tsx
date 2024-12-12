import Events from "./Events";
import { Marquee } from "./Marquee";

const ReviewCard = ({
  img,
  title,
  description,
  venue,
  date,
  time,
  unstopLink,
}: {
  img: string;
  title: string;
  description: string;
  venue: string;
  date: string;
  time: string;
  unstopLink: string;
}) => {
  return (
    <>
      <div
        className="border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15] w-[70vw] md:w-[30vw] h-[40vh] rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col font-orbitron custom-arrow-pointer"
        onClick={() => {
          window.location.href = unstopLink;
        }}
      >
        <img src={img} className="object-cover h-48 custom-arrow-pointer"></img>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="mb-4 text-2xl custom-arrow-pointer">{title}</h3>
          <div className="mb-4 text-grey-darker text-sm flex-1 custom-arrow-pointer">
            <p className="custom-arrow-pointer">{description}</p>
          </div>
          <p className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide custom-arrow-pointer">
            {date} {time}
            {" , "} {venue}
          </p>
        </div>
      </div>
    </>
  );
};

export function EventsList({ data }: { data: Events[] }) {
  return (
    <div className="relative flex py-[3vh] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover>
        {data.map((item) => (
          <ReviewCard key={item.title} {...item} />
        ))}
      </Marquee>
      <Marquee reverse={true} pauseOnHover>
        {data.map((review) => (
          <ReviewCard key={review.title} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#111] from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#111] from-background"></div>
    </div>
  );
}
