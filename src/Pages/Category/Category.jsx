import React from "react";
import logo from "../../../src/assets/icon.png";

const Category = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="md:text-3xl font-bold">
            Furni<span className="text-[#1E99F5] font-inter">Flex</span>
          </h1>
        </div>
        <h1 className="text-4xl font-bold mt-4 text-[#1E99F5]">Categories Coming Soon..</h1>
      </div>
    </section>
  );
};

export default Category;
