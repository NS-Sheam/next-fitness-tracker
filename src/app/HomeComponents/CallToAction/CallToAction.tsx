import React from "react";
import "./CallToAction.css";

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-band-primary via-band-secondary to-band-ternery text-white my-6 rounded-2xl">
      <div className="cta-background absolute top-0 left-0 w-full h-full opacity-30 bg-cover"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-semibold mb-4">Join Us Today!</h2>
        <p className="text-lg mb-8">
          Experience a world of fitness innovation, expert guidance, and community support. Unlock your full potential
          with our comprehensive fitness tracking platform.
        </p>
        <button className="bg-sky-blue hover:bg-light-blue text-band-primary font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
