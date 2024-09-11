"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./shared/Container";

const HowSection = () => {
  return (
    <section className="py-[108px] how__bg">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Slide in from the left
            animate={{ opacity: 1, x: 0 }} // Final position
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation speed
            className=""
          >
            <img
              src="/assets/images/ceo-sm.png"
              alt="Wright Choice VA Team"
              className="object-contain max-w-full max-h-full lg:hidden"
            />
            <img
              src="/assets/images/ceo.png"
              alt="Wright Choice VA Team"
              className="object-contain max-w-full max-h-full hidden lg:block"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Slide in from the right
            animate={{ opacity: 1, x: 0 }} // Final position
            transition={{ duration: 1.0, ease: "easeOut" }} // Animation speed
            className=" text-white max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#DE4B87]">
              How Wright Choice VA Solves These Problems
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Unlock More Time</h3>
                <p className="text-lg">
                  Our VAs take on the administrative burdens, from managing your
                  inbox to coordinating your calendar, freeing up your time to
                  focus on scaling your business.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Targeted Leads Generation
                </h3>
                <p className="text-lg">
                  We use advanced tools and proven strategies to bring
                  high-quality prospects directly to you, ensuring your sales
                  pipeline is always full.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Consistent Results</h3>
                <p className="text-lg">
                  Enjoy a steady flow of qualified leads and the peace of mind
                  that comes with predictable revenue and growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HowSection;
