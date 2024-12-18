import { MagicCard } from "./AboutCard";
import { ContactDock } from "./ContactDock";
import { ContactGrid } from "./ContactGrid";
import { ContactSphere } from "./ContactSphere";

const socials = [
  {
    title: "Instagram",
    icon: (
      <img
        src="instagram.svg"
        alt="instagram"
        className="invert custom-arrow-pointer"
      />
    ),
    href: "https://www.instagram.com/hydr0gen_001/",
  },
  {
    title: "LinkedIn",
    icon: (
      <img
        src="linkedin.svg"
        alt="linkedin"
        className="invert custom-arrow-pointer"
      />
    ),
    href: "https://www.instagram.com/aviral._.gaur/",
  },
  {
    title: "Unstop",
    icon: (
      <img
        src="unstop.svg"
        alt="unstop"
        className="invert-0 custom-arrow-pointer"
      />
    ),
    href: "https://www.instagram.com/hydr0gen_001/",
  },
  {
    title: "Gmail",
    icon: (
      <img
        src="gmail.svg"
        alt="gmail"
        className="invert custom-arrow-pointer"
      />
    ),
    href: "mailto:spacecon@nsut.ac.in?subject=Query regarding SpaceCon'25&body=Please send me a copy of your new program!",
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
      className="z-10 relative min-h-[60vh] w-full bg-[#111] text-white flex flex-col md:gap-0 gap-10 justify-center items-center overflow-hidden"
      id="contact"
    >
      <MagicCard
        className="w-fit mt-[10vh] md:mt-[15vh] rounded-full backdrop-blur-md z-10"
        gradientColor="rgba(255, 255, 255, 0.3)"
      >
        <h2 className="text-center relative text-[9vw] md:text-[6vw] px-8 tracking-wider font-semibold">
          CONTACT US
        </h2>
      </MagicCard>
      <div className="w-[90vw] md:gap-[3vw] flex flex-col md:flex-row justify-between items-center">
        <img
          src="/astronaut-2.png"
          alt="astronaut"
          className="w-[60vw] md:w-[15vw] object-contain z-0 contact-astronaut hidden md:block"
        />
        <MagicCard
          className="md:w-fit flex flex-col justify-center items-center md:mt-[6vh] py-[2vw] px-[5vw] rounded-full backdrop-blur-md z-10"
          gradientColor="rgba(255, 255, 255, 0.3)"
        >
          <p className="text-center relative text-[4.8vw] md:text-[2.5vw] ">
            <span className="text-[#6356fd]">Email</span>
            <br />
            spacecon@nsut.ac.in
            <br />
            <br />
            <span className="text-[#6356fd]">Contacts</span>
          </p>
          <div className="w-full m-auto text-[5vw] md:text-[1.5vw] flex justify-around items-center">
            <p>Avantika Ambra -</p>
            <p>99115 61128</p>
          </div>
          <br />
          <div className="w-full m-auto text-[5vw] md:text-[1.5vw] flex justify-around items-center">
            <p>Omkar Ahuja -</p>
            <p>97111 06833</p>
          </div>
          <br />
          <div className="w-full m-auto text-[5vw] md:text-[1.5vw] flex justify-around items-center">
            <p>Nikhil Kumar -</p>
            <p>88103 13021</p>
          </div>
          <br />
          <div className="w-full m-auto text-[5vw] md:text-[1.5vw] flex justify-around items-center">
            <p>Ayush Jha -</p>
            <p>88609 59917</p>
          </div>
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
