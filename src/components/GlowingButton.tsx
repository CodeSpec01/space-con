const GlowingButton = ({ text }: { text: string }) => {
  return (
    <button className="relative flex items-center justify-center w-52 h-12 rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600 bg-origin-border p-1 transition-transform duration-500 ease-in-out hover:scale-110 active:border-pink-500 custom-arrow-pointer">
      <div className="absolute inset-0 bg-gray-900 rounded-full custom-arrow-pointer" />
      <span className="relative z-10 text-white font-bold tracking-widest text-xs drop-shadow-[0_0_4px_white] pr-[1vw] custom-arrow-pointer">
        {text}
      </span>
      <span className="custom-arrow-pointer bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center text-center invert ">
        &#8599;
      </span>
      <div className="absolute inset-0 overflow-hidden rounded-full custom-arrow-pointer">
        <div className="absolute w-[50rem] h-[50rem] -top-40 -left-80 bg-transparent animate-[animStarRotate_90s_linear_infinite] bg-[radial-gradient(white_1px,transparent_1%)] bg-[50px_50px] opacity-50 custom-arrow-pointer" />
        <div className="absolute w-[50rem] h-[50rem] -top-40 -left-80 bg-transparent animate-[animStar_60s_linear_infinite] bg-[radial-gradient(white_1px,transparent_1%)] bg-[50px_50px] custom-arrow-pointer" />
      </div>
      <div className="absolute flex w-48 custom-arrow-pointer">
        <div className="w-full h-8 bg-pink-500 opacity-60 blur-2xl animate-[pulse_3011_4s_infinite] custom-arrow-pointer" />
        <div className="w-full h-8 bg-purple-500 opacity-70 blur-2xl animate-[pulse_3011_4s_infinite] custom-arrow-pointer" />
      </div>
    </button>
  );
};

export default GlowingButton;
