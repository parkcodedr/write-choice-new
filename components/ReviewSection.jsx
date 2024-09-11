"use client";

import React from "react";
import { motion } from "framer-motion";
import VideoPlayer from "./shared/VideoPlayer";

const reviews = [
  {
    name: "Alex",
    company: "Fernepay Card Services",
    videoUrl:
      "https://res.cloudinary.com/smartcode-technologies/video/upload/v1726062317/Alex_Fern_Pay_fpnwp9.mov",
    videoThumbnail: "/assets/images/alex.png",
  },
  {
    name: "Matt",
    company: "Blistech Solutions",
    videoUrl:
      "https://res.cloudinary.com/smartcode-technologies/video/upload/v1726062317/Alex_Fern_Pay_fpnwp9.mov",

    videoThumbnail: "/assets/images/math.png",
  },
  {
    name: "Sarah & Martin",
    company: "Harvey & CO",
    videoUrl:
      "https://res.cloudinary.com/smartcode-technologies/video/upload/v1726062317/Alex_Fern_Pay_fpnwp9.mov",

    videoThumbnail: "/assets/images/sarah.png",
  },
];

const ReviewSection = () => {
  return (
    <section className="py-[108px] bg-[#F1EEEE]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          See the Impact – Real Results from Real Businesses
        </h2>
        <p className="text-gray-600 mt-2">
          See our reviews from customers we have served using our services:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-8 max-w-7xl mx-auto px-4">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="  rounded-lg overflow-hidden w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative max-h-[491px] w-full lg:w-[381px] mx-auto">
              <VideoPlayer
                showPlayButton={false}
                thumbnail={review.videoThumbnail}
                videoSrc={review.videoUrl}
                alt="Unlocking Business Growth"
              />
              {/* Overlay with play button */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <button className="text-white text-4xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-5.197 3.117a1 1 0 01-1.555-.832V9.547a1 1 0 011.555-.832l5.197 3.117a1 1 0 010 1.664z"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
            {/* <div className="p-6">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-gray-600">{review.company}</p>
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
