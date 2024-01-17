import React from "react";
import {
  FaBullseye,
  FaCalendarCheck,
  FaChartLine,
  FaDumbbell,
  FaRegSmileWink,
  FaEdit,
  FaMedal,
  FaTrophy,
} from "react-icons/fa";
import dummyImage1 from "../../../assets/fitness.png";
import dummyImage2 from "../../../assets/fitness.png";
import dummyImage3 from "../../../assets/fitness.png";
import Image from "next/image";

const Goals = () => {
  return (
    <div className="goal-container p-8 bg-gray-100 shadow-lg rounded-lg text-gray-800 my-6 relative">
      <div className="absolute top-2 right-2">
        <button className="text-band-primary">
          <FaEdit className="mr-1" />
          Edit Goals
        </button>
      </div>
      <div className="flex items-center mb-6">
        <FaBullseye className="text-4xl mr-4 text-band-primary" />
        <h2 className="text-3xl font-semibold">My Fitness Goals</h2>
      </div>

      {/* Goal Details */}
      <div className="mb-8">
        <div className="text-xl font-semibold mb-4">Goal Details</div>
        <div className="flex items-center mb-4">
          <FaCalendarCheck className="text-xl text-band-primary mr-2" />
          <span>Goal Deadline: December 31, 2023</span>
        </div>
        <div className="flex items-center mb-4">
          <FaDumbbell className="text-xl text-band-primary mr-2" />
          <span>Fitness Target: Lose 10 kg</span>
        </div>
      </div>

      {/* Progress Tracking */}
      <div className="mb-8">
        <div className="text-xl font-semibold mb-4">Progress Tracking</div>
        <div className="flex items-center mb-4">
          <FaChartLine className="text-xl text-band-primary mr-2" />
          <span>Current Weight: 75 kg</span>
        </div>
        <div className="flex items-center mb-4">
          <FaChartLine className="text-xl text-band-primary mr-2" />
          <span>Progress: 2 kg lost</span>
        </div>
      </div>

      {/* Motivational Content */}
      <div className="mb-8">
        <div className="text-xl font-semibold mb-4">Stay Motivated!</div>
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 mr-4 rounded-full overflow-hidden">
            <Image
              src={dummyImage1}
              alt="Motivational Quote"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-gray-700">
              &quot;Success is not final, failure is not fatal: It is the courage to continue that counts.&quot;
            </p>
            <p className="text-gray-700">- Winston Churchill</p>
          </div>
        </div>
      </div>

      {/* Achievement */}
      <div className="mb-8">
        <div className="text-xl font-semibold mb-4">Celebrate Achievements!</div>
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 mr-4 rounded-full overflow-hidden">
            <Image
              src={dummyImage2}
              alt="Achievement 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-gray-700">You have achieved a milestone! Keep going.</p>
            <p className="text-gray-700">Reward yourself for your hard work.</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 mr-4 rounded-full overflow-hidden">
            <Image
              src={dummyImage3}
              alt="Achievement 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-gray-700">You hare unstoppable! Another achievement unlocked.</p>
            <p className="text-gray-700">Celebrate your success journey.</p>
          </div>
        </div>
      </div>

      {/* Rewards */}
      <div className="text-xl font-semibold mb-4">Claim Your Rewards!</div>
      <div className="flex items-center mb-4">
        <FaMedal className="text-4xl text-band-primary mr-4" />
        <div>
          <p className="mb-2 text-gray-700">Congratulations! You have earned a gold medal.</p>
          <p className="text-gray-700">Wear it proudly and keep aiming higher.</p>
        </div>
      </div>
      <div className="flex items-center">
        <FaTrophy className="text-4xl text-band-primary mr-4" />
        <div>
          <p className="mb-2 text-gray-700">You hare a champion! A trophy is waiting for you.</p>
          <p className="text-gray-700">Claim it and celebrate your victory.</p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
