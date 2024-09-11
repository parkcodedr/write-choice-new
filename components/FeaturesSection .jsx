"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./shared/Container";

const FeaturesSection = () => {
  return (
    <section className="py-[108px] bg-white">
      <Container>
        <div className="text-center w-full md:max-w-3xl mx-auto">
         
          <motion.h2
            initial={{ opacity: 0, y: 50 }} // Initial state: hidden and pushed down
            animate={{ opacity: 1, y: 0 }} // End state: visible and in normal position
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            {`Overwhelmed by day-to-day tasks and struggling to fill your sales
            pipeline?`}
          </motion.h2>

        
          <motion.p
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.0, delay: 0.3 }} 
            className="text-lg text-gray-600 mb-10"
          >
            {`It's time to reclaim your time and fuel your business growth with
            qualified leads.`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} // Initially hidden
            animate={{ opacity: 1 }} // Animates to visible
            transition={{ duration: 1.2, delay: 0.6 }} // Further delay for stagger effect
            className="text-left max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold text-pink-600 mb-6">
              {`Pain Points:`}
            </h3>

            <ul className="space-y-6 text-lg">
              <li>
                <h4 className="font-semibold text-gray-800">
                  {`Bogged Down by Routine tasks?`}
                </h4>
                <p className="text-gray-600">
                  {`Endless administrative work can eat up your time, leaving you
                  with little energy to focus on strategic growth.`}
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-800">
                  {`Struggling to generate quality Leads?`}
                </h4>
                <p className="text-gray-600">
                 {` Without a steady stream of qualified leads, growing your
                  business becomes a constant uphill battle.`}
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-800">
                  {`Unpredictable Sales Pipeline?`}
                </h4>
                <p className="text-gray-600">
                  {`Fluctuations in lead generation and conversion can lead to
                  inconsistent revenue, making it difficult to plan for growth.`}
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-800">
                  {`Missed Opportunity Due to Lack of Time?`}
                </h4>
                <p className="text-gray-600">
                  {`When you're consumed by daily tasks, you may miss out on
                  valuable opportunities to expand your business or enter new
                  markets.`}
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
