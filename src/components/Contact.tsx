import { MagicCard } from "./AboutCard";
import { ContactDock } from "./ContactDock";
import { ContactGrid } from "./ContactGrid";
import { ContactSphere } from "./ContactSphere";

const socials = [
  {
    title: "Instagram",
    icon: <img src="instagram.svg" alt="instagram" className="invert" />,
    href: "https://www.instagram.com/hydr0gen_001/",
  },
  {
    title: "LinkedIn",
    icon: <img src="linkedin.svg" alt="linkedin" className="invert" />,
    href: "https://www.instagram.com/aviral._.gaur/",
  },
  {
    title: "Unstop",
    icon: <img src="unstop.svg" alt="unstop" className="invert-0" />,
    href: "https://www.instagram.com/hydr0gen_001/",
  },
  {
    title: "Gmail",
    icon: <img src="gmail.svg" alt="gmail" className="invert" />,
    href: "https://www.instagram.com/aviral._.gaur/",
  },
];

const slugs = [
  "nasa",
  "republicofgamers",
  "SpaceX",
  "alienware",
  "icloud",
  "playstation",
  "starship",
  "stardock",
  "spaceship",
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

const Contact = () => {
  return (
    <div
      className="z-10 relative min-h-[60vh] w-full bg-[#111] text-white flex flex-col gap-10 items-center overflow-hidden"
      id="contact"
    >
      <MagicCard className="w-fit mt-[10vh] md:mt-[15vh] rounded-full backdrop-blur-md z-10">
        <h2 className="text-center relative text-[9vw] md:text-[5vw] px-4 font-orbitron font-semibold">
          CONTACT US
        </h2>
      </MagicCard>
      <div className="w-[90vw] gap-[3vh] md:gap-[3vw] flex flex-col md:flex-row justify-between items-center">
        <img
          src="/astronaut-2.png"
          alt="astronaut"
          className="w-[60vw] md:w-[15vw] object-contain z-0 contact-astronaut hidden md:block"
        />
        <MagicCard className="w-fit m-auto md:mt-[15vh] rounded-full backdrop-blur-md z-10">
          <p className="text-center relative text-[4.8vw] md:text-[2.5vw] px-4 py-2 font-orbitron font-extralight">
            Email - nakshatransit@gmail.com
            <br />
            <br />
            Contact - 8299456620
          </p>
        </MagicCard>
        <img
          src="/computer.png"
          alt="Laptop"
          className="w-[60vw] md:w-[15vw] object-contain z-0 contact-astronaut hidden md:block"
        />
      </div>
      <div className="absolute scale-[1.2]">
        <ContactSphere iconSlugs={slugs} />
      </div>
      <ContactDock
        items={socials}
        desktopClassName="mt-[15vh] mb-[5vh]"
        mobileClassName="relative mt-[15vh] mb-[5vh] left-[35vw] scale-[1.5] z-20"
      />
      <ContactGrid className="-z-10" />
    </div>
  );
};

export default Contact;
