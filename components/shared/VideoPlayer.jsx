"use client";
import React, { useState } from "react";

const VideoPlayer = ({ thumbnail, videoSrc, alt, showPlayButton = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full max-w-4xl mb-8">
      {!isPlaying ? (
        <>
          {/* Thumbnail with Play Button */}
          <img
            onClick={showPlayButton ? null : handlePlayClick}
            src={thumbnail}
            alt={alt}
            className={`${
              showPlayButton ? "" : "cursor-pointer "
            } w-full h-auto rounded-lg`}
          />
          {showPlayButton ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="bg-white p-4 rounded-full shadow-lg"
                onClick={handlePlayClick}
              >
                <svg
                  className="w-12 h-12 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.752 11.168l-5.853-3.59A.75.75 0 008 8.75v6.5a.75.75 0 001.138.643l5.853-3.59a.75.75 0 000-1.285z" />
                </svg>
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <div className="h-[460px] relative rounded-lg">
          <video
            className="w-full h-full rounded-lg object-cover"
            controls
            autoPlay
          >
            <source src={videoSrc}  />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
