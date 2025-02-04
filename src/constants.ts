export type Event = {
  name: string;
  description?: string;
  venue?: string;
  date: string;
  startTime?: string;
  link?: string;
  image: string;
  endTime?: string;
  prize?: string;
  ruleBook?: string;
  comingSoon?: boolean;
};

export const mainEvents: Event[] = [
  {
    name: "AI Horizon",
    description:
      "AI Horizon: Generative AI Challenge brings together technology and creativity to explore the role of AI in space exploration and storytelling. Research with a focus on AI-driven research, planning, and mission. Workshops on cutting-edge AI innovations that help define our journey to human destinations. If you are into space, AI, or creative tech, here's your chance to explore the future of space exploration!",
    venue: "comming soon",
    date: "23rd Feb 2025",
    link: "https://unstop.com/o/jcZLfDC?lb=OjRJ5Man",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    image: "/aihorizon.png",
    prize: "50K INR",
    ruleBook:
      "https://drive.google.com/file/d/1-x6fk1r7sJfUrxZB16jijFANZUUrz2yL/view?usp=drivesdk",
  },
  {
    name: "Data Sphere",
    description:
      "This is the data analytics event of SpaceCon. As visualization takes centre stage, the event is all about drawing insights from the given data. It is the ultimate test of your analytical skills and storytelling as it involves presenting your insights in a creative and impactful way..",
    venue: "comming soon",
    date: "22nd Feb 2025",
    startTime: "12:00 PM",
    link: "https://unstop.com/o/Ae7QPuX?lb=OjRJ5Man",
    image: "/Datasphereweb.png",
    prize: "50K INR",
    ruleBook:
      "https://drive.google.com/file/d/1FIQsMkwPNEJf5BIq9p0Ixi_6G1Gx-vck/view?usp=sharing",
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
      "https://drive.google.com/file/d/1-c6h0dYSLXFrXtG31MwsYWuTdAlW4N_-/view",
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
      "https://drive.google.com/file/d/1-ihCZMuyhd3T2ENRVm-LcCB2Xo8o0c66/view",
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
    name: "Movie Eve",
    description:
      "Get ready for an electrifying night under the cosmos! Movie Eve brings you an immersive cinematic experience featuring a thrilling space-themed movie that will take you on an interstellar adventure.",
    venue: "APJ 11",
    date: "23rd Feb",
    startTime: "5 PM",
    image: "/MovieEve_Web.png",
  },
  {
    name: "Web-a-Thon",
    description:
      "Web-a-Thon is a frontend-focused website design challenge where participants will craft visually stunning and innovative websites based on space-related problem statements. Entries will be judged on design, creativity, responsiveness, and code structure.",
    venue: "Coming Soon",
    date: "21st Feb",
    startTime: "12 PM",
    image: "/webathon.png",
    prize: "50K INR",
    ruleBook:
      "https://drive.google.com/file/d/114FYKzW1L6bVVcMMr9PSDwWKRC-bpiO6/view?usp=drivesdk",
    link: "https://unstop.com/o/pzCMbhj?lb=OjRJ5Man",
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
      "https://drive.google.com/file/d/1-ihCZMuyhd3T2ENRVm-LcCB2Xo8o0c66/view",
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
      "https://drive.google.com/file/d/1-c6h0dYSLXFrXtG31MwsYWuTdAlW4N_-/view",
  },
  {
    name: "Movie Eve",
    description:
      "Get ready for an electrifying night under the cosmos! Movie Eve brings you an immersive cinematic experience featuring a thrilling space-themed movie that will take you on an interstellar adventure..",
    venue: "APJ 11",
    date: "23rd Feb",
    startTime: "5 PM",
    image: "/MovieEve_Web.png",
  },
  {
    name: "Data Sphere",
    description:
      "This is the data analytics event of SpaceCon. As visualization takes centre stage, the event is all about drawing insights from the given data. It is the ultimate test of your analytical skills and storytelling as it involves presenting your insights in a creative and impactful way..",
    venue: "comming soon",
    date: "22nd Feb 2025",
    startTime: "12:00 PM",
    link: "https://unstop.com/o/Ae7QPuX?lb=OjRJ5Man",
    image: "/Datasphereweb.png",
    prize: "50K INR",
    ruleBook:
      "https://drive.google.com/file/d/1FIQsMkwPNEJf5BIq9p0Ixi_6G1Gx-vck/view?usp=sharing",
  },
  {
    name: "Web-a-Thon",
    description:
      "Web-a-Thon is a frontend-focused website design challenge where participants will craft visually stunning and innovative websites based on space-related problem statements. Entries will be judged on design, creativity, responsiveness, and code structure.",
    venue: "Coming Soon",
    date: "21st Feb",
    startTime: "12 PM",
    image: "/webathon.png",
    link: "https://unstop.com/o/pzCMbhj?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/114FYKzW1L6bVVcMMr9PSDwWKRC-bpiO6/view?usp=drivesdk",
    prize: "50K INR",
  },
  {
    name: "AI Horizon",
    description:
      "AI Horizon: Generative AI Challenge brings together technology and creativity to explore the role of AI in space exploration and storytelling. Research with a focus on AI-driven research, planning, and mission. Workshops on cutting-edge AI innovations that help define our journey to human destinations. If you are into space, AI, or creative tech, here's your chance to explore the future of space exploration!",
    venue: "comming soon",
    date: "23rd Feb 2025",
    link: "https://unstop.com/o/jcZLfDC?lb=OjRJ5Man",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    image: "/aihorizon.png",
    prize: "50K INR",
    ruleBook:
      "https://drive.google.com/file/d/1-x6fk1r7sJfUrxZB16jijFANZUUrz2yL/view?usp=drivesdk",
  },
];
