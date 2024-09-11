"use client";

import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Container from "./shared/Container";
import Link from "next/link";

const CTASection = () => {
  return (
    <main className="mt-[108px]">
      <Container>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-12 px-5 lg:px-20  rounded-[20px] text-center lg:max-w-[842px] mx-auto "
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#050505] mb-6">
            Grow Your Business With Wright Choice Today!
          </h2>
          <div className="mt-7">
            <Link
              href="#"
              className="bg-primary text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </motion.section>
      </Container>
    </main>
  );
};

export default CTASection;
