import React from "react";
import "./AboutUs.css";

const AboutUsSection: React.FC = () => {
  return (
    <section className="py-16 text-white about-us my-6 rounded-2xl">
      <div className="max-w-4xl mx-auto text-center bg-opacity-75 p-8">
        <h2 className="text-4xl font-semibold mb-6">About Us</h2>
        <p className="text-lg mb-8">
          Welcome to our fitness tracker service! At Stay Fit, we are passionate about helping you achieve your fitness
          goals. Our team of dedicated fitness experts and developers have crafted a comprehensive fitness tracking
          platform to support you on your fitness journey.
        </p>
        <p className="text-lg mb-8">
          Whether you are a beginner looking to start a fitness routine or a seasoned athlete aiming to enhance your
          performance, our advanced workout routines, personalized coaching, and vibrant community support are tailored
          to meet your unique needs.
        </p>
        <p className="text-lg">
          Join us today and embark on a transformative fitness experience. Let us work together to reach new heights of
          health and wellness!
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
