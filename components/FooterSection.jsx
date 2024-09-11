"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "./shared/Container";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="footer__bg mt-[108px] py-20 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-12"
        >
          <div className="text-white text-center md:text-left mb-8 md:mb-0">
            <Image
              src="/assets/images/logo.png"
              alt="Wright Choice Logo"
              width={130}
              height={53}
            />
          </div>

          <div className="text-white ">
            <h3 className="text-xl font-semibold mb-2">Contact Us:</h3>
            <div className="text-sm mb-2 flex gap-2 items-center">
              <span aria-label="phone">
                <Phone />
              </span>{" "}
              <p>Call us at: +44 7454 029919</p>
            </div>
            <div className="text-sm flex items-center gap-2">
              <span aria-label="email">
                <Mail />
              </span>{" "}
              Mail us at:{" "}
              <Link
                href="mailto:lianne@wrightchoiceeva.co.uk"
                className="underline hover:text-gray-300"
              >
                lianne@wrightchoiceeva.co.uk
              </Link>
            </div>
          </div>

          <div className="text-white  mt-8 md:mt-0">
            <h3 className="text-xl">{`Limited Time Offer!`}</h3>
            <p className="text-2xl font-bold">Increase your productivity</p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default FooterSection;
