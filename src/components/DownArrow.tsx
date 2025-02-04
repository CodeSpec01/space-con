const DownArrow = ({
  href,
  className,
}: {
  href: string;
  className?: string;
}) => {
  return (
    <div
      className={`absolute bottom-[2vh] z-40 w-full flex justify-center items-center animate-bounce ${className}`}
    >
      <a href={href} className="">
        <img
          src="/downarrow.svg"
          alt="Down Arrow"
          className="invert h-[5vh] border-2 border-black rounded-full custom-arrow-pointer"
        />
      </a>
    </div>
  );
};

export default DownArrow;
