import Image from "next/image";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaDumbbell,
  FaFire,
  FaHeartbeat,
  FaCalendarAlt,
  FaStar,
  FaUtensils,
  FaBed,
  FaTextHeight,
  FaSyncAlt,
} from "react-icons/fa";
import profileImg from "../../../assets/images/overview-img/profile.jpg";
import fitnessImg from "../../../assets/fitness.png";
import dietImg from "../../../assets/images/overview-img/nutration.jpg";

const dummyFitnessData = {
  weight: "70 kg",
  height: "175 cm",
  caloriesBurned: "500 kcal",
  heartRate: "80 bpm",
  workoutDays: "4 days/week",
  rating: "4.8",
};

const dummyUserData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 123-456-7890",
  birthday: "January 1, 1990",
  profileImage: profileImg,
};

const Profile = () => {
  return (
    <div className="profile-container p-8 bg-gray-100 shadow-lg rounded-lg text-white my-6">
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 mr-4 rounded-full overflow-hidden hover:ring-4 ring-band-ternary">
          <Image
            src={dummyUserData.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-band-primary">{dummyUserData.name}</h2>
          <p className="text-band-primary">{dummyUserData.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-start items-start">
        {/* Contact Info */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-gray-700 text-xl mr-2" />
            <span className="text-gray-700">{dummyUserData.email}</span>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-gray-700 text-xl mr-2" />
            <span className="text-gray-700">{dummyUserData.phone}</span>
          </div>
          <div className="flex items-center mb-4">
            <FaBirthdayCake className="text-gray-700 text-xl mr-2" />
            <span className="text-gray-700">{dummyUserData.birthday}</span>
          </div>
          {/* Update Contact Info Button */}
          <button
            className="btn btn-outline flex items-center text-gray-700 hover:text-band-primary transition duration-300"
            //   onClick={handleUpdateData}
          >
            <FaSyncAlt className="text-xl mr-2" />
            Update Profile Data
          </button>
        </div>

        {/* Fitness Data */}
        <div>
          <div className="text-2xl font-semibold mb-4 text-band-primary">Fitness Data</div>
          <div className="flex items-center mb-4">
            <FaDumbbell className="text-gray-700 text-xl mr-2" />
            <span className="text-gray-700">Weight: {dummyFitnessData.weight}</span>
          </div>
          <div className="flex items-center mb-4">
            <FaTextHeight className="text-gray-700 text-xl mr-2" />
            <span className="text-gray-700">Height: {dummyFitnessData.height}</span>
          </div>
          <div className="flex items-center mb-4">
            <FaFire className="text-gray-700 text-xl mr-2" />
            <span className="text-gray-700">Calories Burned: {dummyFitnessData.caloriesBurned}</span>
          </div>
          <div className="flex items-center mb-4">
            <FaHeartbeat className="text-gray-700 text-xl mr-2" />
            <span className="text-gray-700">Heart Rate: {dummyFitnessData.heartRate}</span>
          </div>
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-gray-700 text-xl mr-2" />
            <span className="text-gray-700">Workout Days: {dummyFitnessData.workoutDays}</span>
          </div>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-400 text-xl mr-2" />
            <span className="text-gray-700">Rating: {dummyFitnessData.rating}</span>
          </div>
        </div>
      </div>

      {/* Fitness Journey */}
      <div className="text-2xl font-semibold mb-4 text-band-primary">Fitness Journey</div>
      <div className="flex items-center mb-4">
        <div className="w-20 h-20 mr-4 rounded-full overflow-hidden hover:ring-4 ring-band-ternary">
          <Image
            src={fitnessImg}
            alt="Fitness"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec turpis in nunc cursus varius. Vestibulum
          non finibus tellus. Nunc sed massa nec urna fermentum pharetra.
        </p>
      </div>

      {/* Diet */}
      <div className="text-2xl font-semibold mb-4 text-band-primary">Diet</div>
      <div className="flex items-center mb-4">
        <div className="w-20 h-20 mr-4 rounded-full overflow-hidden hover:ring-4 ring-band-ternary">
          <Image
            src={dietImg}
            alt="Diet"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-gray-700">
          Sed vitae urna a libero malesuada porttitor. Nullam congue justo nec odio malesuada, non pellentesque eros
          vestibulum. Vivamus tincidunt semper lacus, vel tristique justo venenatis a.
        </p>
      </div>

      {/* Sleep */}
      <div className="text-2xl font-semibold mb-4 text-band-primary">Sleep</div>
      <div className="flex items-center mb-4">
        <div className="w-20 h-20 mr-4 rounded-full overflow-hidden hover:ring-4 ring-band-ternary">
          <Image
            src={dietImg}
            alt="Sleep"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-gray-700">
          Integer in justo euismod, malesuada elit a, congue sapien. Integer id ex non massa tincidunt vestibulum vitae
          vel lectus. Curabitur in ex ut lorem suscipit rhoncus vitae eu mauris.
        </p>
      </div>
    </div>
  );
};

export default Profile;
