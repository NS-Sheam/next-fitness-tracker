"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/dashboard/profile", label: "Profile Page" },
    { path: "/activity-log", label: "Activity Log Page" },
    { path: "/dashboard/goals", label: "Goals Page" },
    { path: "/workout-routines", label: "Workout Routines Page" },
    { path: "/training-programs", label: "Training Programs Page" },
    { path: "/nutrition", label: "Nutrition and Meal Tracking Page" },
    { path: "/progress", label: "Progress Analytics Page" },
  ];

  return (
    <div className="bg-gray-800 h-screen w-64 fixed left-0 top-0 py-4 px-2 text-white">
      <h1 className="text-3xl font-bold mb-8">Stay Fit</h1>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`cursor-pointer mb-4 ${router.pathname === item.path ? "text-blue-500" : ""}`}
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
