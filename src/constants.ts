export type Event = {
  name: string;
  description?: string;
  date: string;
  startTime?: string;
  endTime?: string;
  prize?: string;
  venue?: string;
  image: string;
  link?: string;
  ruleBook?: string;
  comingSoon?: boolean;
};

export const mainEvents: Event[] = [
  {
    name: "SkyScape",
    description:
      "Astrophotography invites participants to capture celestial wonders using a phone, camera, or telescope, offering a platform to showcase their skills.",
    date: "29th Jan - 15th Feb, 2025",
    startTime: "12:00 am",
    endTime: "11:59 pm",
    prize: "6K INR",
    venue: "Online",
    image: "/skyscape.png",
    link: "https://unstop.com/events/skyscape-spacecon-2025-netaji-subhas-university-of-technology-nsut-delhi-1378287",
    ruleBook:
      "https://drive.google.com/file/d/1o_wKaOvfM9njH_oM4ngnCyTg0ofXvbew/view",
  },
  {
    name: "Data Sphere",
    description:
      "This is the data analytics event of SpaceCon. As visualization takes centre stage, the event is all about drawing insights from the given data. It is the ultimate test of your analytical skills and storytelling as it involves presenting your insights in a creative and impactful way..",
    date: "22nd Feb, 2025",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/Datasphereweb.png",
    link: "https://unstop.com/o/Ae7QPuX?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/1FIQsMkwPNEJf5BIq9p0Ixi_6G1Gx-vck/view?usp=sharing",
  },
  {
    name: "DiraCosmos",
    description:
      "DiraCosmos is the case study event in which we will be having questions revolving around Doraemon’s (a fictional character) cosmos adventure. This adventure includes pulsars, dark matter, dark energy, time warp, planck energy and planets.",
    date: "23rd Feb, 2025",
    startTime: "11:00 am",
    endTime: "5:00 pm",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/diracosmos.png",
    link: "https://unstop.com/o/9qbhV3D?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/1-c6h0dYSLXFrXtG31MwsYWuTdAlW4N_-/view",
  },
  {
    name: "Super-Know-A",
    description:
      "Super-Know-A is a competitive quiz designed to challenge participants in astronomy, space exploration, and cosmic phenomena. It represents the pursuit of knowledge, culminating in a breakthrough moment—an explosion of insight and achievement. Push your limits, rise to the challenge, and claim the title of Super-Know-A!",
    date: "22nd Feb, 2025",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/superknowa.png",
    link: "https://unstop.com/o/VNbvxoA?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/14Nd8NFJHnndxoZlT2L47eddKISno6qj6/view?usp=drivesdk",
  },
  {
    name: "InnovEarth",
    description:
      "The InnovEarth Ideathon is a platform for creative minds to generate innovative solutions using technologies to build scalable, impactful solutions to global challenges. Focused on themes such as women's safety, pollution control, healthcare improvements, rural development, space waste etc.  The event aims to inspire actionable ideas, solutions and roadmaps that promote sustainable development.",
    date: "21st Feb, 2025",
    startTime: "10:00 am",
    endTime: "5:00 pm",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/innovearth.png",
    link: "https://unstop.com/o/OF2X9qd?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/1-ihCZMuyhd3T2ENRVm-LcCB2Xo8o0c66/view",
  },
  {
    name: "CTRL + ALT + HACK",
    description:
      "The SpaceCon Hackathon is a 24-hour innovation marathon where brilliant minds collaborate to ideate, design, and prototype solutions using Generative AI, Machine Learning, and Web 3.0/Blockchain.",
    date: "22nd - 23rd Feb, 2025",
    startTime: "8:00 am",
    endTime: "2:00 pm",
    prize: "1.5 Lakhs INR",
    venue: "Coming Soon",
    image: "/ctrlalthack.png",
    link: "https://unstop.com/o/moUA7bT?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/1lfh6MgsGQZKtfFPBUVxKasK9_ug0W3zj/view",
  },
  {
    name: "Product Prodigy",
    description:
      '"Product Prodigy - A Product Teardown Competition" is an exciting and dynamic competition designed to bring together innovative minds. This event challenges participants to identify real-world problems and create feasible product-based solutions while gaining hands-on experience in product development, teamwork, and pitching.',
    date: "23rd Feb, 2025",
    startTime: "11:00 AM",
    endTime: "5:00 AM",
    prize: "100K INR",
    venue: "Coming Soon",
    image: "/productprodigy.png",
    link: "https://unstop.com/o/gIbE1GA?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/14VPYgHXhbGDCIT5sibYVMcDD9nKI7iRU/view?usp=drivesdk",
  },
  {
    name: "Web-a-Thon",
    description:
      "Web-a-Thon is a frontend-focused website design challenge where participants will craft visually stunning and innovative websites based on space-related problem statements. Entries will be judged on design, creativity, responsiveness, and code structure.",
    date: "21st Feb, 2025",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/webathon.png",
    link: "https://unstop.com/o/pzCMbhj?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/114FYKzW1L6bVVcMMr9PSDwWKRC-bpiO6/view?usp=drivesdk",
  },
  {
    name: "AI Horizon",
    description:
      "AI Horizon: Generative AI Challenge brings together technology and creativity to explore the role of AI in space exploration and storytelling. Research with a focus on AI-driven research, planning, and mission. Workshops on cutting-edge AI innovations that help define our journey to human destinations. If you are into space, AI, or creative tech, here's your chance to explore the future of space exploration!",
    date: "23rd Feb, 2025",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/aihorizon.png",
    link: "https://unstop.com/o/jcZLfDC?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/1-x6fk1r7sJfUrxZB16jijFANZUUrz2yL/view?usp=drivesdk",
  },
  {
    name: "Respawn NSUT",
    description:
      "Respawn NSUT is SpaceCon's ultimate gaming battleground, where strategy, skill, and adrenaline collide. With Mortal Kombat 11, FC24, Valorant, BGMI, and CODM, the arena is now open for all gaming enthusiasts to compete, conquer, and claim glory.",
    date: "23rd Feb, 2025",
    startTime: "1:00 PM",
    endTime: "5:00 PM",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/respawnnsut.png",
    link: "https://unstop.com/o/zykJYPq?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/117dBK4rskj8i3XYGQUgV7s-jAoct04a7/view?usp=sharing",
  },
];

export const allEvents: Event[] = [
  {
    name: "InnovEarth",
    description:
      "The InnovEarth Ideathon is a platform for creative minds to generate innovative solutions using technologies to build scalable, impactful solutions to global challenges. Focused on themes such as women's safety, pollution control, healthcare improvements, rural development, space waste etc.  The event aims to inspire actionable ideas, solutions and roadmaps that promote sustainable development.",
    date: "21st Feb, 2025",
    startTime: "10:00 am",
    endTime: "5:00 pm",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/innovearth.png",
    link: "https://unstop.com/o/OF2X9qd?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/1-ihCZMuyhd3T2ENRVm-LcCB2Xo8o0c66/view",
  },
  {
    name: "CTRL + ALT + HACK",
    description:
      "The SpaceCon Hackathon is a 24-hour innovation marathon where brilliant minds collaborate to ideate, design, and prototype solutions using Generative AI, Machine Learning, and Web 3.0/Blockchain.",
    date: "22nd - 23rd Feb, 2025",
    startTime: "8:00 am",
    endTime: "2:00 pm",
    prize: "1.5 Lakhs INR",
    venue: "Coming Soon",
    image: "/ctrlalthack.png",
    link: "https://unstop.com/o/moUA7bT?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/1lfh6MgsGQZKtfFPBUVxKasK9_ug0W3zj/view",
  },
  {
    name: "SkyScape",
    description:
      "Astrophotography invites participants to capture celestial wonders using a phone, camera, or telescope, offering a platform to showcase their skills.",
    date: "29th Jan - 15th Feb, 2025",
    startTime: "12:00 am",
    endTime: "11:59 pm",
    prize: "6K INR",
    venue: "Online",
    image: "/skyscape.png",
    link: "https://unstop.com/events/skyscape-spacecon-2025-netaji-subhas-university-of-technology-nsut-delhi-1378287",
    ruleBook:
      "https://drive.google.com/file/d/1o_wKaOvfM9njH_oM4ngnCyTg0ofXvbew/view",
  },
  {
    name: "DiraCosmos",
    description:
      "DiraCosmos is the case study event in which we will be having questions revolving around Doraemon’s (a fictional character) cosmos adventure. This adventure includes pulsars, dark matter, dark energy, time warp, planck energy and planets.",
    date: "23rd Feb, 2025",
    startTime: "11:00 am",
    endTime: "5:00 pm",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/diracosmos.png",
    link: "https://unstop.com/o/9qbhV3D?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/1-c6h0dYSLXFrXtG31MwsYWuTdAlW4N_-/view",
  },
  {
    name: "Movie Eve",
    description:
      "Get ready for an electrifying night under the cosmos! Movie Eve brings you an immersive cinematic experience featuring a thrilling space-themed movie that will take you on an interstellar adventure..",
    date: "23rd Feb, 2025",
    startTime: "5:00 PM",
    venue: "Coming Soon",
    image: "/MovieEve_Web.png",
  },
  {
    name: "Data Sphere",
    description:
      "This is the data analytics event of SpaceCon. As visualization takes centre stage, the event is all about drawing insights from the given data. It is the ultimate test of your analytical skills and storytelling as it involves presenting your insights in a creative and impactful way..",
    date: "22nd Feb, 2025",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/Datasphereweb.png",
    link: "https://unstop.com/o/Ae7QPuX?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/1FIQsMkwPNEJf5BIq9p0Ixi_6G1Gx-vck/view?usp=sharing",
  },
  {
    name: "Web-a-Thon",
    description:
      "Web-a-Thon is a frontend-focused website design challenge where participants will craft visually stunning and innovative websites based on space-related problem statements. Entries will be judged on design, creativity, responsiveness, and code structure.",
    date: "21st Feb, 2025",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/webathon.png",
    link: "https://unstop.com/o/pzCMbhj?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/114FYKzW1L6bVVcMMr9PSDwWKRC-bpiO6/view?usp=drivesdk",
  },
  {
    name: "Stargazing",
    description:
      "Stargazing is a night spent under the vast celestial canvas, where the wonders of the universe come to life. With telescopes in hand, participants will embark on a journey of constellation hunting, planet spotting, and engaging discussions about the mysteries of the cosmos.",
    date: "22nd Feb, 2025",
    startTime: "9:00 PM",
    venue: "Coming Soon",
    image: "/Stargazing_web.png",
  },
  {
    name: "AI Horizon",
    description:
      "AI Horizon: Generative AI Challenge brings together technology and creativity to explore the role of AI in space exploration and storytelling. Research with a focus on AI-driven research, planning, and mission. Workshops on cutting-edge AI innovations that help define our journey to human destinations. If you are into space, AI, or creative tech, here's your chance to explore the future of space exploration!",
    date: "23rd Feb, 2025",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/aihorizon.png",
    link: "https://unstop.com/o/jcZLfDC?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/1-x6fk1r7sJfUrxZB16jijFANZUUrz2yL/view?usp=drivesdk",
  },
  {
    name: "Respawn NSUT",
    description:
      "Respawn NSUT is SpaceCon's ultimate gaming battleground, where strategy, skill, and adrenaline collide. With Mortal Kombat 11, FC24, Valorant, BGMI, and CODM, the arena is now open for all gaming enthusiasts to compete, conquer, and claim glory.",
    date: "23rd Feb, 2025",
    startTime: "1:00 PM",
    endTime: "5:00 PM",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/respawnnsut.png",
    link: "https://unstop.com/o/zykJYPq?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/117dBK4rskj8i3XYGQUgV7s-jAoct04a7/view?usp=sharing",
  },
  {
    name: "Super-Know-A",
    description:
      "Super-Know-A is a competitive quiz designed to challenge participants in astronomy, space exploration, and cosmic phenomena. It represents the pursuit of knowledge, culminating in a breakthrough moment—an explosion of insight and achievement. Push your limits, rise to the challenge, and claim the title of Super-Know-A!",
    date: "22nd Feb, 2025",
    startTime: "12:00 PM",
    endTime: "5:00 PM",
    prize: "50K INR",
    venue: "Coming Soon",
    image: "/superknowa.png",
    link: "https://unstop.com/o/VNbvxoA?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/14Nd8NFJHnndxoZlT2L47eddKISno6qj6/view?usp=drivesdk",
  },
  {
    name: "Product Prodigy",
    description:
      '"Product Prodigy - A Product Teardown Competition" is an exciting and dynamic competition designed to bring together innovative minds. This event challenges participants to identify real-world problems and create feasible product-based solutions while gaining hands-on experience in product development, teamwork, and pitching.',
    date: "23rd Feb, 2025",
    startTime: "11:00 AM",
    endTime: "5:00 AM",
    prize: "100K INR",
    venue: "Coming Soon",
    image: "/productprodigy.png",
    link: "https://unstop.com/o/gIbE1GA?lb=OjRJ5Man",
    ruleBook:
      "https://drive.google.com/file/d/14VPYgHXhbGDCIT5sibYVMcDD9nKI7iRU/view?usp=drivesdk",
  },
];
