export type Event = {
  name: string;
  description: string;
  venue?: string;
  date: string;
  startTime?: string;
  link: string;
  image: string;
  endTime?: string;
  prize?: string;
  ruleBook: string;
  comingSoon?: boolean;
};

export const mainEvents: Event[] = [
  {
    name: "DiraCosmos",
    description:
      "DiraCosmos is the case study event in which we will be having questions revolving around Doraemon’s (a fictional character) cosmos adventure. This adventure includes pulsars, dark matter, dark energy, time warp, planck energy and planets.",
    venue: "Coming Soon",
    date: "23rd Feb",
    startTime: "11:00 am",
    link: "https://unstop.com/o/9qbhV3D?lb=OjRJ5Man",
    image: "/diracosmos.png",
    prize: "50K INR",
    ruleBook:
      "https://drive.google.com/file/d/1EvcXdTzUCra6jG8Ivu-Y0tE8FBghVAJR/view?usp=sharing",
  },
  {
    name: "InnovEarth",
    description:
      "The InnovEarth Ideathon is a platform for creative minds to generate innovative solutions using technologies to build scalable, impactful solutions to global challenges. Focused on themes such as women's safety, pollution control, healthcare improvements, rural development, space waste etc.  The event aims to inspire actionable ideas, solutions and roadmaps that promote sustainable development.",
    venue: "Mini Audi, NSUT",
    date: "21st Feb",
    startTime: "10:00 am",
    link: "https://unstop.com/o/OF2X9qd?lb=OjRJ5Man",
    image: "/innovearth.png",
    prize: "50K INR",
    ruleBook:
      "https://drive.google.com/file/d/1n_j4QRcdIlSTsDR-OxtNRX2caHv3F37u/view?usp=sharing",
  },
  {
    name: "CTRL + ALT + HACK",
    description:
      "The SpaceCon Hackathon is a 24-hour innovation marathon where brilliant minds collaborate to ideate, design, and prototype solutions using Generative AI, Machine Learning, and Web 3.0/Blockchain.",
    venue: "NSUT",
    date: "22nd - 23rd Feb",
    startTime: "8:00 am",
    link: "https://unstop.com/o/moUA7bT?lb=OjRJ5Man",
    image: "/ctrlalthack.png",
    endTime: "2:00 pm",
    prize: "1.5 Lakhs INR",
    ruleBook:
      "https://drive.google.com/file/d/1lfh6MgsGQZKtfFPBUVxKasK9_ug0W3zj/view",
  },
  {
    name: "SkyScape",
    description:
      "Astrophotography invites participants to capture celestial wonders using a phone, camera, or telescope, offering a platform to showcase their skills.",
    venue: "Online",
    date: "29th Jan - 10th Feb",
    link: "https://unstop.com/events/skyscape-spacecon-2025-netaji-subhas-university-of-technology-nsut-delhi-1378287",
    image: "/skyscape.png",
    prize: "6K INR",
    ruleBook:
      "https://drive.google.com/file/d/1o_wKaOvfM9njH_oM4ngnCyTg0ofXvbew/view",
  },
];

export const allEvents: Event[] = [
  {
    name: "InnovEarth",
    description:
      "The InnovEarth Ideathon is a platform for creative minds to generate innovative solutions using technologies to build scalable, impactful solutions to global challenges. Focused on themes such as women's safety, pollution control, healthcare improvements, rural development, space waste etc.  The event aims to inspire actionable ideas, solutions and roadmaps that promote sustainable development.",
    venue: "Mini Audi, NSUT",
    date: "21st Feb",
    startTime: "10:00 am",
    link: "https://unstop.com/o/OF2X9qd?lb=OjRJ5Man",
    image: "/innovearth.png",
    prize: "50K INR",
    ruleBook:
      "https://drive.google.com/file/d/1n_j4QRcdIlSTsDR-OxtNRX2caHv3F37u/view?usp=sharing",
  },
  {
    name: "CTRL + ALT + HACK",
    description:
      "The SpaceCon Hackathon is a 24-hour innovation marathon where brilliant minds collaborate to ideate, design, and prototype solutions using Generative AI, Machine Learning, and Web 3.0/Blockchain.",
    venue: "NSUT",
    date: "22nd - 23rd Feb",
    startTime: "8:00 am",
    link: "https://unstop.com/o/moUA7bT?lb=OjRJ5Man",
    image: "/ctrlalthack.png",
    endTime: "2:00 pm",
    prize: "1.5 Lakhs INR",
    ruleBook:
      "https://drive.google.com/file/d/1lfh6MgsGQZKtfFPBUVxKasK9_ug0W3zj/view",
  },
  {
    name: "SkyScape",
    description:
      "Astrophotography invites participants to capture celestial wonders using a phone, camera, or telescope, offering a platform to showcase their skills.",
    venue: "Online",
    date: "29th Jan - 10th Feb",
    link: "https://unstop.com/events/skyscape-spacecon-2025-netaji-subhas-university-of-technology-nsut-delhi-1378287",
    image: "/skyscape.png",
    prize: "6K INR",
    ruleBook:
      "https://drive.google.com/file/d/1o_wKaOvfM9njH_oM4ngnCyTg0ofXvbew/view",
  },
  {
    name: "DiraCosmos",
    description:
      "DiraCosmos is the case study event in which we will be having questions revolving around Doraemon’s (a fictional character) cosmos adventure. This adventure includes pulsars, dark matter, dark energy, time warp, planck energy and planets.",
    venue: "Coming Soon",
    date: "23rd Feb",
    startTime: "11:00 am",
    link: "https://unstop.com/o/9qbhV3D?lb=OjRJ5Man",
    image: "/diracosmos.png",
    prize: "50K INR",
    ruleBook:
      "https://drive.google.com/file/d/1EvcXdTzUCra6jG8Ivu-Y0tE8FBghVAJR/view?usp=sharing",
  },
];
