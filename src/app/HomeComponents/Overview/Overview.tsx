import OverviewCard from "./OverviewCard";
import profileImg from "../../../assets/images/overview-img/profile.jpg";
import activity from "../../../assets/images/overview-img/activity-track.jpg";
import database from "../../../assets/images/overview-img/database.jpg";
import plan from "../../../assets/images/overview-img/workout-plan.jpg";
import nutrition from "../../../assets/images/overview-img/nutration.jpg";
import progress from "../../../assets/images/overview-img/monitoring.jpg";
import social from "../../../assets/images/overview-img/social.jpg";
import mobile from "../../../assets/images/overview-img/mobile-inte.jpg";
import goalSet from "../../../assets/images/overview-img/goalset.jpg";
import SectionTitle from "../../../components/shared/SectionTitle";
const Overview = () => {
  const cards = [
    {
      heading: "Personalized Profiles",
      img: profileImg,
      description:
        "Create a personalized profile to set your goals, track your progress, and customize your fitness preferences. You can enter your basic information, such as age, gender, height, and weight, to get tailored recommendations and accurate tracking.",
      alt: "personalized",
    },
    {
      heading: "Activity Tracking",
      img: activity,
      description:
        "Monitor and record your daily activities, including steps, distance, calories burned, and active minutes. Our website integrates with various fitness devices and smartphone apps to automatically sync your data, providing you with real-time insights into your activity levels.",
      alt: "activity tracking",
    },
    {
      heading: "Exercise Database",
      img: database,
      description:
        "Access an extensive exercise database with a wide range of activities, from cardio exercises like running and cycling to strength training exercises like weightlifting and yoga. Each exercise includes detailed instructions, duration, and estimated calorie burn, allowing you to track your workouts accurately.",
      alt: "exercise database",
    },
    {
      heading: "Workouts and Training Plans",
      img: plan,
      description:
        "Discover pre-designed workout routines and training plans tailored to different fitness levels and goals. Whether you're a beginner looking to start a fitness routine or an experienced athlete targeting specific areas, you'll find a variety of options to choose from. Follow the guided instructions, track your progress, and stay motivated throughout your training.",
      alt: "workout plan",
    },
    {
      heading: "Nutrition Tracking",
      img: nutrition,
      description:
        "Maintain a healthy and balanced diet by tracking your daily nutrition intake. Our platform allows you to log your meals, record calorie consumption, track macronutrients (carbohydrates, proteins, and fats), and set personalized nutrition goals. You can also explore a database of nutritional information for various food items.",
      alt: "nutration",
    },
    {
      heading: "Progress Monitoring",
      img: progress,
      description:
        "Stay motivated by tracking your progress over time. Our website provides visual representations of your fitness journey, including graphs and charts, to showcase improvements in your activity levels, weight management, and overall health.",
      alt: "progress monitoring",
    },
    {
      heading: "Social Community",
      img: social,
      description:
        "Connect with like-minded individuals and foster a sense of community by joining fitness challenges, sharing your achievements, and participating in group discussions. Engage with other users, seek advice, and inspire each other on your fitness paths.",
    },
    {
      heading: "Mobile Accessibility",
      img: mobile,
      description:
        "Access our website on-the-go with our mobile app, available for both iOS and Android devices. Track your progress, log your workouts, and stay connected to the fitness community anytime, anywhere.",
    },
    {
      heading: "Goal Setting and Reminders",
      img: goalSet,
      description:
        "Set personalized fitness goals and receive reminders to help you stay on track. Whether it's a daily step target, weekly workout schedule, or monthly weight loss goal, our platform will provide you with the necessary prompts and reminders to keep you motivated and focused..",
      alt: "soal setting",
    },
  ];
  return (
    <div className="py-6">
      <SectionTitle
        heading={"Feature Overview"}
        paragraph={
          "Our platform offers a wide range of features and tools to support your fitness journey and make tracking your progress easy and enjoyable. Here's an overview of the key features available."
        }
      />
      <div className="space-y-5 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
          {cards.slice(0, 6).map((card, i) => (
            <OverviewCard
              key={i}
              heading={card.heading}
              img={card.img}
              description={card.description}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
