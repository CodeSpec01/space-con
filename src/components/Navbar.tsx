import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const hamMenuRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="w-[100vw] flex justify-center items-center z-50 fixed md:top-[4vh]">
        <div className="w-full md:w-[90%] flex justify-center m-auto backdrop-blur-md px-[3vw] md:py-[1.5vh] md:rounded-full bg-black/50">
          <div className="w-full md:w-full flex justify-between items-center">
            <Link
              to={"https://aviralgaur.vercel.app/about"}
              className="flex justify-center items-center gap-[1vw] min-w-20 cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[8vw] md:w-[3vw] z-50 "
              />
              <span className="text-white text-[2vw] font-orbitron font-bold navbar-text hidden md:block">
                SPACECON
              </span>
            </Link>
            <div className="md:block justify-center items-center hidden">
              <ul className="flex gap-[3vw] text-white font-orbitron font-light  text-[1.5vw] ">
                <a href="/#" className="navbar-text">
                  Home
                </a>
                <a href="/#timeline" className="navbar-text">
                  Timeline
                </a>
                <a href="/#events" className="navbar-text">
                  Events
                </a>
                <a href="/#about" className="navbar-text">
                  About Us
                </a>
                <a href="/#contact" className="navbar-text">
                  Contact Us
                </a>
              </ul>
            </div>
            {/* Hamburger */}
            <div className="cursor-pointer relative block md:hidden z-50">
              <div
                className="plate plate2 invert"
                ref={hamMenuRef}
                onClick={(e) => {
                  e.currentTarget.classList.toggle("active");
                  const ele = document.querySelector(
                    "#hamburger-menu"
                  ) as HTMLElement;
                  const position = parseInt(ele.dataset.position!);
                  ele.style.transform = `translateX(-${position - 50}vw)`;
                  if (position == 150) {
                    ele.dataset.position = "50";
                  } else {
                    ele.dataset.position = "150";
                  }
                }}
              >
                <svg
                  className="burger"
                  version="1.1"
                  height="100"
                  width="100"
                  viewBox="0 0 100 100"
                >
                  <path
                    className="line line1"
                    d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"
                  />
                  <path
                    className="line line2"
                    d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"
                  />
                  <path
                    className="line line3"
                    d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"
                  />
                  <path
                    className="line line4"
                    d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"
                  />
                  <path
                    className="line line5"
                    d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"
                  />
                  <path
                    className="line line6"
                    d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"
                  />
                </svg>
                <svg
                  className="x"
                  version="1.1"
                  height="100"
                  width="100"
                  viewBox="0 0 100 100"
                >
                  <path className="line" d="M 34,32 L 66,68" />
                  <path className="line" d="M 66,32 L 34,68" />
                </svg>
              </div>
            </div>
            <div
              className="w-[100vw] h-[100vh] top-0 left-0 -translate-x-[100%] transition-all duration-1000 absolute bg-black z-40 block md:hidden"
              data-position="50"
              id="hamburger-menu"
            >
              <div className="flex flex-col items-center gap-[10vh] top-[20vh] relative ">
                <div>
                  <h1 className="font-orbitron text-white text-[12vw] md:text-[8vw] text-center align-middle border-b-2 md:leading-[9vw] z-40 ">
                    <strong>SPACECON</strong>
                  </h1>
                  <h2 className="font-mono text-white text-[4vw]  text-center align-middle z-40">
                    NAKSHATRA x TDS
                  </h2>
                </div>
                <div
                  className="flex flex-col w-full text-white font-orbitron font-light text-[4vw] text-center items-center justify-center "
                  onClick={() => {
                    hamMenuRef.current?.click();
                  }}
                >
                  <a href="/#" className="navbar-text border-y-2 w-full py-3">
                    Home
                  </a>
                  <a
                    href="/#timeline"
                    className="navbar-text border-b-2 w-full py-3"
                  >
                    Timeline
                  </a>
                  <a
                    href="/#events"
                    className="navbar-text border-b-2 w-full py-3"
                  >
                    Events
                  </a>
                  <a
                    href="/#about"
                    className="navbar-text border-b-2 w-full py-3"
                  >
                    About Us
                  </a>
                  <a
                    href="/#contact"
                    className="navbar-text border-b-2 w-full py-3"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
