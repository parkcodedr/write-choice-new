"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./shared/Container";
import PricingCard from "./shared/PricingCard";

const PricingSection = () => {
  const pricingData = [
    {
      title: "VA Lite",
      description: `Ideal for: Solopreneurs, small business owners, and individuals seeking basic administrative support`,
      hours: "Up to 5 hours weekly",
      features: [
        `Email management: Sorting, prioritizing, responding, and delegating emails.`,
        `Calendar management: Scheduling appointments, meetings, and reminders.`,
        `Admin and Data entry: Supporting smooth daily operation including document management.`,
        `Task Management: Our expert virtual assistants handle task management with precision and efficiency, ensuring nothing slips through the cracks. From scheduling to project coordination, we take care of the details, so you don’t have to.`,
      ],
      buttonText: "Let's Talk",
    },
    {
      title: "VA Power",
      description: `Ideal for: Busy professionals, entrepreneurs, and small businesses requiring comprehensive virtual assistant`,
      hours: "Up to 10 hours per week",
      features: [
        "Project management: Coordinating and overseeing projects from start to finish.",
        `Customer support: Responding to customer inquiries and resolving issues`,
        "Travel arrangements: Booking flights, hotels, and transportation.",
      ],
      buttonText: "Let's Talk",
    },
    {
      title: "VA Superstar",
      description: `Ideal for: Growth-oriented businesses seeking to expand their market reach and generate more leads.`,
      hours: "Up to 15 hours per week",
      features: [
        `Lead generation: Identifying and researching your target market to collate names, email address and connected social profiles.`,
        `Marketing automation: Setting up and managing personalised, highly engaging email sequences`,
        `Social media management: We Will integrate with your social platforms engaging with your network, sending connection request to your target audience and responding to messages`,
        `Omni Marketing: We integrate with LinkedIn and Instagram to engage your audience, send connection request and highly personalised engaging messages to identify opportunities.`,
      ],
      buttonText: "Let's Talk",
    },
  ];

  return (
    <section className="py-[108px] bg-white" id="packages">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 "
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-3xl mx-auto">
            Pick any of our packages to experience our impact
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 justify-between 2xl:px-20 ">
          {pricingData.map((packageData, index) => (
            <PricingCard
              key={index}
              title={packageData.title}
              description={packageData.description}
              hours={packageData.hours}
              features={packageData.features}
              buttonText={packageData.buttonText}
              index={index} // Pass the index for staggered animation delay
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
