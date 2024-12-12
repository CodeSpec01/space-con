import "./Loader.css";

const Loader = ({ id }: { id?: string }) => {
  return (
    <div
      className="loader-bg h-screen w-full flex flex-col gap-[5vh] transition-all duration-[1s] absolute overflow-hidden page-loader pointer-events-none"
      id={id}
      onClick={(e) => {
        e.currentTarget.style.opacity = "0";
        setTimeout(() => {
          e.currentTarget.style.display = "none";
        }, 1000);
      }}
    >
      <div className="planet"></div>
    </div>
  );
};

export default Loader;
