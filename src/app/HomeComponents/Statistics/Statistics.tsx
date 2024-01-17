"use client";
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { FaUsers, FaChartLine } from "react-icons/fa";
import achievementImage from "../../../assets/images/overview-img/profile.jpg";
import Image from "next/image";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function Statistics() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            color: "#ffffff", // White text color
          },
        },
      },
      title: {
        display: true,
        text: "Statistics",
        font: {
          size: 18,
          color: "#ffffff", // White text color
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
            color: "#ffffff", // White text color
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
            color: "#ffffff", // White text color
          },
        },
      },
    },
  };

  const numberOfUsersAchievedGoals = [1200, 1350, 1500, 1650, 1800, 1950, 2100]; // Replace with actual data
  const averageImprovement = [1000, 900, 1100, 1400, 1300, 1100, 1000]; // Replace with actual data

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]; // Shortened month names for compactness

  const data = {
    labels,
    datasets: [
      {
        label: "Users Achieved Goals",
        data: numberOfUsersAchievedGoals,
        backgroundColor: "#ffffff",
        barThickness: 20, // Adjust the thickness of the bars
      },
      {
        label: "Average Improvement",
        data: averageImprovement,
        backgroundColor: "#00B4D8", // band-ternery color
        barThickness: 20, // Adjust the thickness of the bars
      },
    ],
  };

  return (
    <div className="my-6 p-6 bg-band-primary shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="text-2xl font-semibold mb-4 text-white text-right">Stay Fit Statistics</h2>
      <div className="flex items-center mb-4">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-white mb-1">Achievement Overview</span>
          <p className="text-lignt-blue text-sm">
            Explore the achievements of your users and track their progress. Our app provides insights and analytics to
            help you make data-driven decisions for your fitness programs.
          </p>
        </div>
      </div>
      <div className="chart-container flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-white">
          <div className="relative w-40 h-40 rounded-full overflow-hidden animate-pulse mb-4">
            <Image
              src={achievementImage}
              alt="Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">
              {numberOfUsersAchievedGoals.reduce((a, b) => a + b, 0)} Users Have Achieved Goals
            </p>
            <p className="text-lg font-semibold">
              {(averageImprovement.reduce((a, b) => a + b, 0) / averageImprovement.length || 0).toFixed(2)}% Average
              Improvement
            </p>
            <p className="text-lg font-semibold">Get ready to celebrate their success!</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Bar
            options={options}
            data={data}
          />
        </div>
      </div>
    </div>
  );
}
