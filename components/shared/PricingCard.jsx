"use client";

import React from "react";
import { motion } from "framer-motion";
import CheckMark from "../vector/CheckMark";

const PricingCard = ({
  title,
  description,
  hours,
  features,
  buttonText,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-[#51255F] text-white rounded-lg shadow-md p-8 w-full md:w-1/3 relative"
    >
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <p className="mb-4">
        <span className="font-semibold">{description.split(":")[0]}: </span>
        <span>{description.split(":")[1]}</span>
      </p>
      <p className="mb-6">
        <strong>Hours: </strong>
        {hours}
      </p>
      {title == "VA Power" ? (
        <p className="text-base mb-2">All VA Lite services plus</p>
      ) : null}
      {title == "VA Superstar" ? (
        <p className="text-base mb-2">All VA Power services plus</p>
      ) : null}
      <ul className="mb-20 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-pink-300">
              <CheckMark />
            </span>
            <p className="text-sm">
              <span className="font-semibold">{feature.split(":")[0]}:</span>
              <span>{feature.split(":")[1]}</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <button className="bg-primary text-white py-3 px-16 absolute bottom-8 rounded-3xl">
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
