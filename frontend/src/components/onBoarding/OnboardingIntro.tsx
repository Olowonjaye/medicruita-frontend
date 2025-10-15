const OnboardingIntro = () => {
  return (
    <div
      className="w-full flex flex-col text-white"
    >
      {/* Top - Logo */}
      <div className="flex items-center h-[10%]">
        <img src="logo.png" alt="Logo" className="w-[200px]" />
      </div>
      <div className="flex justify-center items-center w-full h-[90%]">
        <img
          src="hero2.png"
          alt="Hero"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
export default OnboardingIntro;