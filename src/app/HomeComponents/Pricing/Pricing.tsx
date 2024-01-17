import React from "react";
import { FaDumbbell, FaUtensils, FaUsers, FaBolt, FaCogs } from "react-icons/fa";
import SectionTitle from "@/components/shared/SectionTitle";
import PricingCard from "./PricingCard";

export interface Pricing {
  id: number;
  name: string;
  price: number;
  services: { text: string; icon: React.ReactNode }[];
}

const Pricing: React.FC = () => {
  const plans: Pricing[] = [
    {
      id: 1,
      name: "Basic Plan",
      price: 9.99,
      services: [
        { text: "Access to basic workout routines", icon: <FaDumbbell /> },
        { text: "Calorie and activity tracking", icon: <FaBolt /> },
        { text: "Progress tracking", icon: <FaUsers /> },
        { text: "Community support forum", icon: <FaCogs /> },
      ],
    },
    {
      id: 2,
      name: "Silver Plan",
      price: 19.99,
      services: [
        { text: "Access to advanced workout routines", icon: <FaDumbbell /> },
        { text: "Customized meal plans", icon: <FaUtensils /> },
        { text: "Calorie and activity tracking", icon: <FaBolt /> },
        { text: "Progress tracking", icon: <FaUsers /> },
        { text: "Community support forum", icon: <FaCogs /> },
      ],
    },
    {
      id: 3,
      name: "Gold Plan",
      price: 29.99,
      services: [
        { text: "Access to premium workout routines", icon: <FaDumbbell /> },
        { text: "Personalized coaching sessions", icon: <FaUsers /> },
        { text: "Customized meal plans", icon: <FaUtensils /> },
        { text: "Calorie and activity tracking", icon: <FaBolt /> },
        { text: "Progress tracking", icon: <FaUsers /> },
        { text: "Community support forum", icon: <FaCogs /> },
      ],
    },
  ];

  return (
    <section className="py-6">
      <SectionTitle
        heading="Pricing"
        paragraph="Uncover a world of fitness innovation right here. Dive into exclusive features, irresistible limited-time offers, and expert partnerships curated just for you. Your path to peak fitness starts now – seize the moment!"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto p-8">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            services={plan.services}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
