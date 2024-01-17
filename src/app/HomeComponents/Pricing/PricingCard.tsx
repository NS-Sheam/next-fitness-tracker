import React from "react";
import { FaCheck } from "react-icons/fa";

interface Service {
  text: string;
  icon: React.ReactNode;
}

interface PricingCardProps {
  name: string;
  price: number;
  services: Service[];
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, services }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl">
      <div className="p-6 flex flex-col h-full justify-between">
        <div>
          <div className="text-2xl font-semibold mb-4">{name}</div>
          <div className="text-gray-700 mb-4">
            <strong>Services:</strong>
            <ul className="list-disc pl-6 mt-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center mb-2"
                >
                  {service.icon} {/* Display icon from the services array */}
                  <span className="ml-2">{service.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-green-500 text-lg">
            <strong>Price: ${price.toFixed(2)}</strong>
          </span>
          <button className="bg-band-primary hover:bg-band-secondary text-white font-bold py-2 px-4 rounded">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
