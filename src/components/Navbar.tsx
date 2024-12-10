const Navbar = () => {
  return (
    <>
      <div className="w-[100vw] flex justify-center items-center z-50 fixed top-[4vh]">
        <div className="w-[95%] m-auto flex justify-between backdrop-blur-md px-[3vw] py-[1.5vh] rounded-full bg-black/50">
          <div className="flex justify-center items-center gap-[1vw]">
            <img src="/logo.png" alt="Logo" className="w-[3vw] " />
            <span className="text-white text-[2vw] font-orbitron font-bold navbar-text">
              SPACECON
            </span>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-[3vw] text-white font-orbitron font-light text-[1.5vw] ">
              <a href="#" className="navbar-text">
                Home
              </a>
              <a href="#" className="navbar-text">
                Timeline
              </a>
              <a href="#" className="navbar-text">
                Events
              </a>
              <a href="#" className="navbar-text">
                About Us
              </a>
              <a href="#" className="navbar-text">
                Contact Us
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
