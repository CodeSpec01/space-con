import { MagicCard } from "./AboutCard";
import { ContactDock } from "./ContactDock";
import { ContactGrid } from "./ContactGrid";

const socials = [
  {
    title: "Instagram",
    icon: <img src="instagram.svg" alt="instagram" className="invert" />,
    href: "https://www.instagram.com/nakshatransit/",
  },
  {
    title: "LinkedIn",
    icon: <img src="linkedin.svg" alt="linkedin" className="invert" />,
    href: "https://www.instagram.com/nakshatransit/",
  },
  {
    title: "Unstop",
    icon: <img src="unstop.svg" alt="unstop" className="invert-0" />,
    href: "https://www.instagram.com/nakshatransit/",
  },
  {
    title: "Gmail",
    icon: <img src="gmail.svg" alt="gmail" className="invert" />,
    href: "https://www.instagram.com/nakshatransit/",
  },
];

const Contact = () => {
  return (
    <div
      className="z-10 relative min-h-screen w-full bg-[#111] text-white flex flex-col items-center"
      id="contact"
    >
      <MagicCard className="w-fit mt-[15vh] rounded-full backdrop-blur-md">
        <h2 className="text-center relative text-[9vw] md:text-[5vw] px-4 font-orbitron font-semibold ">
          CONTACT US
        </h2>
      </MagicCard>
      <MagicCard className="w-fit mt-[15vh] rounded-full backdrop-blur-md">
        <p className="text-center relative text-[4.8vw] md:text-[2.5vw] px-4 py-2 font-orbitron font-extralight ">
          Email - nakshatransit@gmail.com
          <br />
          Contact - 8299456620
        </p>
      </MagicCard>
      <ContactDock items={socials} desktopClassName="mt-[15vh]" mobileClassName="relative top-[45vh] left-[30vw] scale-[2] " />
      <ContactGrid className="-z-10" />
    </div>
  );
};

export default Contact;
