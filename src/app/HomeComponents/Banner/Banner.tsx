import SliderSection from "./SliderSection";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-4 rounded-2xl bg-white min-h-[500px] py-6">
      <div className="w-full md:w-1/2 space-y-2 md:space-y-4 lg:space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-band-secondary">
          Level up Your <span className="text-band-primary">Fitness</span>
        </h1>
        <p className="text-band-primary text-xl">
          Track, analyze, and optimize your workouts with our advanced fitness tracker. Achieve your goals, stay
          motivated, and reach new heights in your fitness journey.
        </p>
        <button className="px-6 py-4 text-xl font-bold bg-band-primary text-white rounded-md">Get Start</button>
      </div>
      <div className="w-full md:w-1/2">
        <SliderSection />
      </div>
    </div>
  );
};

export default Banner;
