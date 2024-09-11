import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-w-[2520px] container mx-auto xl:px-20 md:px-10 2xl:px-8 sm:px-2 px-5 ">
      {children}
    </div>
  );
};

export default Container;
