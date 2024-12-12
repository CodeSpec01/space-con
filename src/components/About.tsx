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
          <h2 className="text-center relative text-[9vw] md:text-[5vw] font-orbitron font-semibold pb-[5vh]">
            ABOUT US
          </h2>
          <p className="font-orbitron font-extralight text-[3.5vw] md:text-[1.5vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            earum ipsum minima nam laboriosam iste distinctio sunt, quibusdam
            quos quisquam. Officia explicabo facilis vero accusamus soluta,
            dignissimos optio! Nihil dolore debitis laborum sit quas, aliquam,
            accusantium omnis ipsa, animi quae soluta dolores illum? Numquam
            doloribus deserunt maiores, totam asperiores placeat neque
            exercitationem expedita minus laborum provident ducimus veritatis
            reprehenderit accusantium et? Minima recusandae rem delectus autem.
            Facilis tempore rerum officiis cupiditate deserunt, possimus ipsa
            pariatur quod distinctio velit iure esse facere, error
            exercitationem quia earum assumenda ab natus, doloribus inventore
            provident nostrum nobis. Eligendi quisquam, ab numquam maiores
            dolorum exercitationem!
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
