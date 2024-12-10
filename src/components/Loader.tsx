import "./Loader.css";

const Loader = () => {
  return (
    <div
      className="loader-bg h-screen w-full flex flex-col gap-[5vh] transition-all duration-1000 absolute overflow-hidden"
      id="page-loader"
    >
      <div className="planet"></div>
    </div>
  );
};

export default Loader;
