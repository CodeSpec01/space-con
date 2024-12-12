import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white font-orbitron text-center w-full py-5 flex justify-center items-center text-[3vw] md:text-[1vw] gap-10">
      <span>COPYRIGHT &#169; SPACECON 2025</span>
      <Link to="/privacy-policy">Privacy Policy</Link>
    </div>
  );
};

export default Footer;
