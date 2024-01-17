"use client";
import Image from "next/image";

import { Statistics } from "../HomeComponents/Statistics/Statistics";
import Banner from "../HomeComponents/Banner/Banner";
import Overview from "../HomeComponents/Overview/Overview";
import Testimonial from "../HomeComponents/Testimonial/Testimonial";
import CallToActionSection from "../HomeComponents/CallToAction/CallToAction";
import HowItWorks from "../HomeComponents/HowItWork/HowToWork";
import Pricing from "../HomeComponents/Pricing/Pricing";
import AboutUsSection from "../HomeComponents/AboutUs/AboutUs";

export default function Home() {
  return (
    <main>
      <Banner />
      <Overview />
      <Testimonial />
      <CallToActionSection />
      <HowItWorks />
      <Statistics />
      <Pricing />
      <AboutUsSection />
    </main>
  );
}
