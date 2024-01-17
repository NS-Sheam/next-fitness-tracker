"use client";
import { Rating, Star } from "@smastrom/react-rating";
import activity from "../../../assets/images/overview-img/activity-track.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
const Testimonial = () => {
  return (
    <div className="inner-container">
      <SectionTitle
        heading="Testimonial"
        paragraph={"What client say about us!"}
      />

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        // loop={true}
        autoplay={{ delay: 4000 }}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="my-6"
          >
            <div className="relative bg-band-primary p-10 lg:p-16 text-white rounded-2xl">
              <FaQuoteLeft className="absolute top-8 left-6 text-3xl lg:text-6xl" />
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <Image
                  src={activity}
                  alt="test"
                  className="rounded-full w-60 hover:scale-110 duration-200"
                />
                <div className="space-y-4">
                  <div className="flex justify-start items-center gap-6">
                    <p className="md:text-xl">
                      <span className="font-bold">Kate Rogers - </span> Graphic Designer
                    </p>
                    <Rating
                      style={{ maxWidth: 120, minWidth: 60 }}
                      value={5}
                      itemStyles={{
                        itemShapes: Star,
                        activeFillColor: "#ffffff",
                        inactiveFillColor: "#fbf1a9",
                      }}
                      readOnly
                    />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold">Amazing Fitness Application</h3>
                  <p>
                    I have been using this application for a few months now and it has been great! I love the variety of
                    exercises available and the ability to track my progress. The community is also very supportive and
                    encouraging. Highly recommend!
                  </p>
                </div>
              </div>
              <FaQuoteRight className="absolute bottom-8 right-6 text-3xl lg:text-6xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
