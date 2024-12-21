import { useEffect } from "react";
import { HyperText } from "./HyperText";
import { GradualSpacing } from "./FadeText";
import DownArrow from "./DownArrow";

const Hero = () => {

  useEffect(() => {
    const parallax_el = document.querySelectorAll(".parallax");

    let xValue = 0;
    let yValue = 0;

    window.addEventListener("mousemove", (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;

      parallax_el.forEach((ele) => {
        const el = ele as HTMLElement;
        let speedX = parseFloat(el.dataset.speedx!);
        let speedY = parseFloat(el.dataset.speedy!);
        let speedZ = parseFloat(el.dataset.speedz!);

        let mapSide =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;
        let zValue =
          (e.clientX - parseFloat(getComputedStyle(el).left)) *
          mapSide *
          0.2 *
          speedZ;

        el.style.transform = `translateX(${
          -xValue * speedX * 0.5
        }px) translateY(${
          -yValue * speedY * 0.5
        }px) perspective(2300px) translateZ(${zValue}px)`;
      });
    });
  }, []);

  return (
    <>
      <div className="h-screen w-full">
        
        <img
          className="absolute h-full w-full bg-center object-cover"
          src="/hero-bg.png"
          onLoad={() => {
            const dummyImageArray = document.querySelectorAll(
              ".dummy-image"
            ) as NodeListOf<HTMLElement>;
            dummyImageArray.forEach((img) => {
              img.style.display = "none";
            });
          }}
        ></img>
        <img
          className="dummy-image absolute h-full w-full bg-center object-cover"
          src="/hero-bg-small.png"
        ></img>
        <div className="h-[100svh] w-full absolute top-0 left-0 vignette z-40"></div>
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden flex justify-center items-center ">
          <img
            data-speedx={"0.05"}
            data-speedy={"0.05"}
            data-speedz={"0"}
            className="parallax h-full w-full absolute object-cover z-0"
            src="/clouds-1.png"
          ></img>
          <img
            data-speedx={"0.05"}
            data-speedy={"0.05"}
            data-speedz={"0"}
            className="dummy-image parallax h-full w-full absolute object-cover z-0"
            src="/clouds-1-small.png"
          ></img>
          <img
            data-speedx={"-0.05"}
            data-speedy={"0"}
            data-speedz={"0"}
            className="parallax z-10 w-full h-full absolute object-cover"
            src="/cliff.png"
          ></img>
          <img
            data-speedx={"-0.05"}
            data-speedy={"0"}
            data-speedz={"0"}
            className="dummy-image parallax z-10 w-full h-full absolute object-cover"
            src="/cliff-small.png"
          ></img>
          <img
            data-speedx={"0.04"}
            data-speedy={"0.04"}
            data-speedz={"1"}
            className="parallax top-[40%] left-[10%] w-[20vw] md:top-[53%] md:left-[26%] md:w-[9vw] z-10 "
            src="/planet-1.png"
          ></img>
          <img
            data-speedx={"0.02"}
            data-speedy={"0.02"}
            data-speedz={"1"}
            className="parallax top-[12%] -left-[8%] w-[40vw] md:top-[10%] md:left-[4%] md:w-[20vw] "
            src="/planet-2.png"
          ></img>
          <img
            data-speedx={"0.06"}
            data-speedy={"0.06"}
            data-speedz={"1"}
            className="parallax top-[47%] left-[59%] w-[10vw] md:top-[47%] md:left-[59%] md:w-[6vw] "
            src="/planet-4.png"
          ></img>
          <img
            data-speedx={"0.09"}
            data-speedy={"0.09"}
            data-speedz={"1"}
            className="parallax top-[12%] right-[7%] w-[14vw] md:top-[12%] md:right-[7%] md:w-[7vw] "
            src="/planet-5.png"
          ></img>
          <img
            data-speedx={"0.08"}
            data-speedy={"0.08"}
            data-speedz={"1"}
            className="parallax top-[63%] right-0 w-[32vw] md:top-[57%] md:right-[18%] md:w-[17vw] "
            src="/planet-7.png"
          ></img>
          <img
            data-speedx={"0.10"}
            data-speedy={"0.10"}
            data-speedz={"1"}
            className="parallax w-full h-full"
            src="/small-planet.png"
          ></img>
          <img
            data-speedx={"0.04"}
            data-speedy={"0.04"}
            data-speedz={"1"}
            className="parallax top-[57%] left-[2%] md:w-[20vw] w-[30vw] "
            src="/astronaut-2.png"
          ></img>
          <img
            data-speedx={"0.04"}
            data-speedy={"0.04"}
            data-speedz={"1"}
            className="parallax bottom-[8%] right-[5%] w-[10vw] "
            src="/astronaut-3.png"
          ></img>
        </div>
        <div className="h-screen w-full absolute top-0 left-0 flex justify-center items-center flex-col pb-[35vh] md:pb-[20vh]">
          <h1 className=" text-white text-[14vw] md:text-[10vw] text-center align-middle border-b-2 md:leading-[9vw] z-40 ">
            <HyperText
              text="SpaceCon"
              className="tracking-wide pointer-events-none"
              duration={100}
            />
          </h1>
          <h2 className="font-mono text-white text-[4vw] text-center align-middle z-40 px-5 mt-3 bg-black/30 backdrop-blur-sm rounded-full">
            <GradualSpacing
              className=" text-[4vw] md:text-[2vw] py-[0.5vh] md:mt-0 tracking-tighter"
              duration={0.5}
              delayMultiple={0.1}
              text="Nakshatra x TDS"
            />
          </h2>
        </div>
        <DownArrow href="#timeline" />
      </div>
    </>
  );
};

export default Hero;
