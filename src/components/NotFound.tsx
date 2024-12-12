import { Link } from "react-router-dom";
import { StarsBackground } from "./AboutStars";
import { TypewriterEffectSmooth } from "./TypingAnimation";

const wordArray = [
  {
    text: ">",
    className: "text-[1.5vw] font-light font-monospace leading-[1.2]",
  },
  {
    text: "ERROR CODE :",
    className: "text-[#f0c674] text-[1.5vw] font-bold font-orbitron",
  },
  {
    text: "HTTP 403 Forbidden",
    className:
      "text-[#8abeb7] text-[1.2vw] font-light font-monospace leading-[1.2]",
  },
  {
    text: "",
    className: "text-[1.5vw] font-light font-monospace leading-[1.2]",
    lineChange: true,
  },
  {
    text: ">",
    className: "text-[1.5vw] font-light font-monospace leading-[1.2]",
  },
  {
    text: "ERROR DESCRIPTION :",
    className: "text-[#f0c674] text-[1.5vw] font-bold font-orbitron",
  },
  {
    text: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
    className:
      "text-[#8abeb7] text-[1.2vw] font-light font-monospace leading-[1.2] text-wrap",
  },
  {
    text: "",
    className: "text-[1.5vw] font-light font-monospace leading-[1.2]",
    lineChange: true,
  },
  {
    text: ">",
    className: "text-[1.5vw] font-light font-monospace leading-[1.2]",
  },
  {
    text: "ERROR POSSIBLY CAUSED BY :",
    className: "text-[#f0c674] text-[1.5vw] font-bold font-orbitron",
  },
  {
    text: "Broken link, incorrect URL, removed content, server-side misconfiguration, or the page is under maintenance. Check the URL for errors, go back to the previous page, or visit the home page.",
    className:
      "text-[#8abeb7] text-[1.2vw] font-light font-monospace  text-wrap",
  },
  {
    text: "",
    className: "text-[1.2vw] font-light font-monospace leading-[1.2]",
    lineChange: true,
  },
  {
    text: ">",
    className: "text-[1.5vw] font-light font-monospace leading-[1.2]",
  },
  {
    text: "SOME PAGES ON THIS SERVER THAT YOU DO HAVE PERMISSION TO ACCESS :",
    className: "text-[#f0c674] text-[1.5vw] font-bold font-orbitron",
  },
  {
    text: "Home Page, Timeline, Contact Us, Privacy Policy...",
    className:
      "text-[#8abeb7] text-[1.2vw] font-light font-monospace  text-wrap",
  },
  {
    text: "",
    className: "text-[1.2vw] font-light font-monospace leading-[1.2]",
    lineChange: true,
  },
  {
    text: ">",
    className: "text-[1.5vw] font-light font-monospace leading-[1.2]",
  },
  {
    text: " HAVE A NICE DAY DARTH VADER :-)",
    className: "text-[#f0c674] text-[1.5vw] font-bold font-orbitron",
  },
];


const NotFound = () => {
  return (
    <div
      className="font-orbitron w-full h-screen overflow-hidden text-white flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(120deg, #4f0088 0%, #000000 100%)",
      }}
    >
      <h1
        className="text-[35vw] text-[#ffffff26] absolute pointer-events-none"
        id="not-found-code"
      >
        404
      </h1>
      <div
        className="w-[85vw] rounded-xl backdrop-blur-sm justify-around md:min-h-[70vh] p-10 flex flex-col gap-4 bg-white/10"
        id="not-found-text"
      >
        <p className="text-[1.2vw] font-light font-monospace leading-[1.2] flex justify-center items-center md:justify-start pointer-events-none">
          <TypewriterEffectSmooth
            words={wordArray}
          />
        </p>
      </div>
      <StarsBackground />
      <Link to="/" className="text-center pointer-events-auto z-50 relative -mt-[6vh] hover:bg-violet-700 bg-green-400 font-bold invert transition-all duration-300 p-3 py-2 rounded-full">
        GO BACK TO EARTH
      </Link>
    </div>
  );
};

export default NotFound;
