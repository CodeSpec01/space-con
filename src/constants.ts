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
};

export const mainEvents: Event[] = [
  {
    name: "CTRL + ALT + HACK",
    description:
      "The Hackathon at SpaceCon is an immersive and dynamic 24-hour innovation marathon, designed to bring together brilliant minds and challenge them to ideate, design and prototype solutions using cutting edge Generative AI, Machine learning and Web 3.0/Blockchain. Participants will have to collaborate to solve real-world problems in the realm of space technology and its application.",
    venue: "Coming Soon",
    date: "22nd - 23rd Feb",
    startTime: "8:00 am",
    link: "https://unstop.com/o/moUA7bT?lb=OjRJ5Man",
    image: "/ctrlalthack.png",
    endTime: "2:00 pm",
    prize: "1.5 Lakhs",
    ruleBook:
      "https://drive.google.com/file/d/1lfh6MgsGQZKtfFPBUVxKasK9_ug0W3zj/view",
  },
  {
    name: "SkyScape",
    description:
      "Astrophotography is an event that invites participants to capture the beauty of the celestial wonders. Whether you're using a mobile phone , a professional camera or a telescope, this event provides a wonderful opportunity for everyone to showcase their photography skills.",
    venue: "Online",
    date: "29th Jan - 10th Feb",
    link: "https://unstop.com/events/skyscape-spacecon-2025-netaji-subhas-university-of-technology-nsut-delhi-1378287",
    image: "/skyscape.png",
    prize: "6K",
    ruleBook:
      "https://drive.google.com/file/d/1o_wKaOvfM9njH_oM4ngnCyTg0ofXvbew/view",
  },
];

export const allEvents: Event[] = [
  {
    name: "CTRL + ALT + HACK",
    description:
      "The Hackathon at SpaceCon is an immersive and dynamic 24-hour innovation marathon, designed to bring together brilliant minds and challenge them to ideate, design and prototype solutions using cutting edge Generative AI, Machine learning and Web 3.0/Blockchain. Participants will have to collaborate to solve real-world problems in the realm of space technology and its application.",
    venue: "Coming Soon",
    date: "Coming Soon",
    startTime: "Coming Soon",
    link: "https://aviralgaur.vercel.app/about",
    image: "/ctrlalthack.png",
    endTime: "Coming Soon",
    prize: "Coming Soon",
    ruleBook:
      "https://drive.google.com/file/d/1lfh6MgsGQZKtfFPBUVxKasK9_ug0W3zj/view",
  },
  {
    name: "SkyScape",
    description:
      "Astrophotography is an event that invites participants to capture the beauty of the celestial wonders. Whether you're using a mobile phone , a professional camera or a telescope, this event provides a wonderful opportunity for everyone to showcase their photography skills.",
    venue: "Online",
    date: "29th Jan - 10th Feb",
    link: "https://unstop.com/events/skyscape-spacecon-2025-netaji-subhas-university-of-technology-nsut-delhi-1378287",
    image: "/skyscape.png",
    prize: "Rs 6000",
    ruleBook:
      "https://drive.google.com/file/d/1o_wKaOvfM9njH_oM4ngnCyTg0ofXvbew/view",
  },
];
