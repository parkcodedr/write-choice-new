"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import Container from "./shared/Container";
import VideoPlayer from "./shared/VideoPlayer";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative hero__bg text-white min-h-screen px-5">
      <Container>
        {/* Navigation */}
        <nav className="mx-auto py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/logo.png"
                alt="Wright Choice Logo"
                width={130}
                height={53}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="#packages" className="hover:underline">
                Packages
              </Link>
            </div>

            
            <Link
              href="#"
              className="hidden md:inline-block px-6 py-3 bg-primary rounded-full text-white"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="absolute top-0 left-0 w-64 h-screen hero__bg z-50  md:hidden">
              <Link href="/" className="flex justify-between items-center border-b p-4">
                <Image
                  src="/assets/images/logo.png"
                  alt="Wright Choice Logo"
                  width={90}
                  height={43}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="mb-6 text-white focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </Link>

              <div className="p-6">
                <ul>
                  <Link href="#packages" className="hover:underline">
                    Packages
                  </Link>
                </ul>
              </div>
            </div>
          </Transition>
        </nav>

        {/* Hero Content */}
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center pt-20 text-center">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">
            Wright Choice VA: Your Key to Unlocking Business Growth
          </h1>
          <p className="mb-5 text-xl text-center">
            {`Are you a hands-on business owner in the service industry looking to
            elevate your success? Say Goodbye to Overwhelm and Hello to Growth
            with Our Expert VA’s.`}
          </p>
         
          <VideoPlayer
            thumbnail="/assets/images/home-thumbnail.png"
            videoSrc="blob:https://www.wrightchoiceva.co.uk/1eac4cf6-ea10-4c47-871c-9157add577d1"
            alt="Unlocking Business Growth"
          />
          <div className="pb-10">
            <Link
              href="#"
              className="px-8 py-4 bg-primary rounded-full text-white text-lg font-semibold"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeroSection;
