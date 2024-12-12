import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <h2 className="text-white font-orbitron text-[3vw] text-center">
        Privacy Policy
      </h2>
      <Link to={"/space-con-secret-admin-panel"}>Don't Click Me</Link>
    </div>
  );
};

export default Privacy;
