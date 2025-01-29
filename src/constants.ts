export type Event = {
  name: string;
  description: string;
  venue: string;
  date: string;
  startTime?: string;
  link: string;
  image: string;
  endTime?: string;
  prize: string;
  ruleBook: string;
  comingSoon?: boolean;
};

export const mainEvents: Event[] = [
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
  // {
  //   name: "Coming Soon",
  //   description: "Coming Soon",
  //   venue: "Online",
  //   date: "Coming Soon",
  //   link: "/comingsoon",
  //   image: "/comingsoon.png",
  //   prize: "Coming Soon",
  //   ruleBook: "/comingsoon",
  //   comingSoon: true,
  // },
  // {
  //   name: "Coming Soon",
  //   description: "Coming Soon",
  //   venue: "Online",
  //   date: "Coming Soon",
  //   link: "/comingsoon",
  //   image: "/comingsoon.png",
  //   prize: "Coming Soon",
  //   ruleBook: "/comingsoon",
  //   comingSoon: true,
  // },
  // {
  //   name: "Coming Soon",
  //   description: "Coming Soon",
  //   venue: "Online",
  //   date: "Coming Soon",
  //   link: "/comingsoon",
  //   image: "/comingsoon.png",
  //   prize: "Coming Soon",
  //   ruleBook: "/comingsoon",
  //   comingSoon: true,
  // },
];
