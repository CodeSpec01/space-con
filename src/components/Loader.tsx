import "./Loader.css";

const Loader = ({ id }: { id?: string }) => {
  return (
    <div
      className="loader-bg h-screen w-full flex flex-col gap-[5vh] transition-all duration-1000 absolute overflow-hidden page-loader"
      id={id}
    >
      <div className="planet"></div>
    </div>
  );
};

export default Loader;
