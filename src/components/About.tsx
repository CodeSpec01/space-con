import { MagicCard } from "./AboutCard";
import { StarsBackground } from "./AboutStars";
import DownArrow from "./DownArrow";
import { ShootingStars } from "./ShootingStars";

const About = () => {
  return (
    <div
      className="min-h-screen w-full bg-[#111] text-white relative flex justify-center items-center"
      id="about"
    >
      <img
        src="/earth.png"
        alt="EARTH"
        className={`z-10 h-[100vh] object-contain absolute ${
          window.innerHeight < window.innerWidth
            ? "-left-[50vh]"
            : "-left-[50vw]"
        }`}
        id="about-earth"
      />

      <div id="about-content">
        <MagicCard
          className="flex flex-col justify-center items-center h-full relative text-center w-[85vw] z-10 border-none bg-transparent backdrop-blur-sm py-10"
          gradientColor="rgba(255, 255, 255, 0.3)"
        >
          <h2 className="text-center relative text-[11vw] md:text-[7vw] tracking-wider font-semibold pb-[5vh]">
            ABOUT US
          </h2>
          <p className=" font-extralight text-[3.5vw] md:text-[1.5vw]">
            At SpaceCon&#39;25, our diverse events, hackathons, ideathons, seminars,
            workshops, panel discussions, and guest lectures will focus on
            innovation in space science and technology. Participants will gain
            hands-on experience with scientific concepts, enhancing their
            understanding of complex theories through practical application.
            <br />
            <br />
            This conclave will encourage collaboration, networking, and
            teamwork, essential for academic and professional growth. By
            blending science with imagination, SpaceCon supports NSUT&#39;s vision
            of producing well-rounded thinkers prepared to make meaningful
            societal contributions, demonstrating our commitment to advancing
            STEM education.
          </p>
        </MagicCard>
      </div>
      <ShootingStars />
      <StarsBackground />
      <DownArrow href="#contact" />
    </div>
  );
};

export default About;
