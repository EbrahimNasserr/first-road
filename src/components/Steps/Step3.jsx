import Image from "next/image";
import React from "react";

const Step3 = ({ formData, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Submitted data:", formData);
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-full flex-col px-6">
      <h1 className="text-7xl font-bold capitalize text-white mb-8">sign up</h1>
      <form className="bg-white rounded-lg w-full lg:w-1/2 p-5" action="">
        <div className=" flex  flex-col items-start md:items-center">
          <h2 className=" text-5xl relative text-[#0C1844] capitalize font-bold mb-5">
            Car license
            <span className=" text-sm absolute right-0 top-12 text-[#0C184482]">
              (optional)
            </span>
          </h2>
          <p className=" w-full md:w-1/2 text-start md:text-center text-[#0C184482] mt-2">To verify your information, please take photos of both the front and back sides of your car license."</p>
        </div>

        <div className="flex justify-center items-center py-6">
            <Image src="/Group 1246.png" width={400} height={400} alt="car" />
        </div>

        <div className=" flex justify-center flex-col gap-2 items-center ">
          <button
            onClick={nextStep}
            type="submit"
            className="px-8 py-2 mb-5 capitalize text-slate-50 rounded-lg bg-buttonColor"
          >
            next
          </button>
          <p className="uppercase">skip {">>"}</p>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/logo.png" width={200} height={200} alt="logo" />
        </div>
      </form>
    </div>
  );
};

export default Step3;
