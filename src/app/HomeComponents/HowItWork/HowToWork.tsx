import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import howItWorksImage1 from "../../../assets/images/overview-img/monitoring.jpg";
import howItWorksImage2 from "../../../assets/images/overview-img/workout-plan.jpg";
import Image from "next/image";

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 px-4 md:px-8 my-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:mr-12 mb-8 lg:mb-0">
          <div className="flex justify-center lg:justify-start mb-6">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mr-4">
              <Image
                src={howItWorksImage1}
                alt="How It Works 1"
                layout="responsive"
                width={300}
                height={300}
              />
            </div>
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
              <Image
                src={howItWorksImage2}
                alt="How It Works 2"
                layout="responsive"
                width={300}
                height={300}
              />
            </div>
          </div>
          <p className="text-gray-700 text-center lg:text-left">
            Experience the journey with us and achieve your fitness goals step by step.
          </p>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-semibold mb-6 text-center lg:text-left text-band-primary">How It Works</h2>
          <ol className="list-decimal pl-8 mb-6 text-gray-700">
            <li className="flex items-center mb-3">
              <FaCheckCircle className="text-green-500 mr-3" />
              Set your fitness goals based on your preferences and objectives.
            </li>
            <li className="flex items-center mb-3">
              <FaCheckCircle className="text-green-500 mr-3" />
              Track your daily activities, including workouts, meals, and hydration.
            </li>
            <li className="flex items-center mb-3">
              <FaCheckCircle className="text-green-500 mr-3" />
              Access personalized workout routines tailored to your fitness level and goals.
            </li>
            <li className="flex items-center mb-3">
              <FaCheckCircle className="text-green-500 mr-3" />
              Monitor your progress over time to stay motivated and achieve your targets.
            </li>
          </ol>
          <div className="text-gray-700 text-center lg:text-left">
            <p>
              Our user-friendly interface and expert-designed features make your fitness journey seamless and rewarding.
            </p>
            <button className="bg-sky-blue hover:bg-light-blue text-band-primary font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none mt-8">
              Learn More <FaArrowRight className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
