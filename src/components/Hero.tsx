import { useEffect } from "react";
import Navbar from "./Navbar";

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
          let speedX = parseInt(el.dataset.speedx!);
          let speedY = parseInt(el.dataset.speedy!);
          let speedZ = parseInt(el.dataset.speedz!);

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
        <Navbar />
        <img
          className="absolute h-full w-full bg-center object-cover -z-50"
          src="/hero-bg.png"
        ></img>
        <div className="h-screen w-full absolute top-0 left-0 vignette z-40"></div>
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden flex justify-center items-center ">
          <img
            data-speedx={"0.05"}
            data-speedy={"0.05"}
            data-speedz={"0"}
            className="parallax h-full w-full absolute object-cover z-0"
            src="/clouds-1.png"
          ></img>
          <img
            data-speedx={"-0.05"}
            data-speedy={"0"}
            data-speedz={"0"}
            className="parallax z-10 w-full h-full absolute object-cover"
            src="/cliff.png"
          ></img>
          <img
            data-speedx={"0.04"}
            data-speedy={"0.04"}
            data-speedz={"1"}
            className="parallax top-[53%] left-[26%] w-[9vw] z-10 "
            src="/planet-1.png"
          ></img>
          <img
            data-speedx={"0.02"}
            data-speedy={"0.02"}
            data-speedz={"1"}
            className="parallax top-[10%] left-[4%] w-[20vw] "
            src="/planet-2.png"
          ></img>
          <img
            data-speedx={"0.06"}
            data-speedy={"0.06"}
            data-speedz={"1"}
            className="parallax top-[47%] left-[59%] w-[6vw] "
            src="/planet-4.png"
          ></img>
          <img
            data-speedx={"0.09"}
            data-speedy={"0.09"}
            data-speedz={"1"}
            className="parallax top-[12%] right-[7%] w-[7vw] "
            src="/planet-5.png"
          ></img>
          <img
            data-speedx={"0.08"}
            data-speedy={"0.08"}
            data-speedz={"1"}
            className="parallax top-[57%] right-[18%] w-[17vw] "
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
            className="parallax top-[57%] left-[2%] w-[20vw] "
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
        <div className="h-screen w-full absolute top-0 left-0 flex justify-center items-center flex-col pb-[20%]">
        <h1 className="font-orbitron text-white text-[12vw] md:text-[8vw] text-center align-middle border-b-2 md:leading-[9vw] z-50 ">
          <strong>SPACECON</strong>
        </h1>
        <h2 className="font-mono text-white text-[4vw]  text-center align-middle z-50">
          NAKSHATRA x TDS
        </h2>
      </div>
      </div>
    </>
  );
};

export default Hero;
