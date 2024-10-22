"use client";
import ButtonNav from "@/components/utils/ButtonNav";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const History = () => {
  // State to track which accordion item is open
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Sample data for accordion items
  const accordionData = [
    {
      imageUrl: "/car2.svg",
      imageUrl2: "/oil 2.svg",
      span: "30% off",
      content: "car cleaning",
    },
    {
      imageUrl: "/car2.svg",
      imageUrl2: "/oil 2.svg",
      span: "30% off",
      content: "car cleaning",
    },
    {
      imageUrl: "/car2.svg",
      imageUrl2: "/oil 2.svg",
      span: "30% off",
      content: "car cleaning",
    },
  ];

  return (
    <section className="h-screen py-12">
      <div className="container flex flex-col justify-center items-center mx-auto">
        <div className="flex w-[90%] justify-center relative items-center">
          <ButtonNav />
          <h1 className=" text-2xl text-center text-[#0C1844] capitalize font-medium">
            history
          </h1>
        </div>
        <div className="bg-[#010A30] mt-5 flex gap-2 w-[90%] justify-between items-center rounded-2xl text-slate-50">
          <div className="capitalize text-sm bg-[#455BB1] w-full flex justify-center items-center h-12 rounded-2xl font-bold">
            oil
          </div>
          <div className="capitalize text-sm w-full flex justify-center items-center h-12 rounded-2xl font-bold">
            Car Cleaning
          </div>
          <div className="capitalize text-sm w-full flex justify-center items-center h-12 rounded-2xl font-bold">
            Banchar
          </div>
        </div>
        <div className="flex text-[#7F859B] w-[90%] justify-between py-6 items-center">
          <div className="flex items-center text-sm gap-2">
            filter <IoIosArrowDown />
          </div>
          <div className="flex gap-3 items-center">
            <div className=" capitalize text-sm">last month</div>
            <div className=" capitalize text-sm">last week</div>
            <div className=" capitalize text-sm">all</div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 w-[90%] pb-12">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="box shadow-custom3-shadow bg-[#F2F2F2] p-3 rounded-xl"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <IoLocationOutline className=" text-[#455BB1] text-sm" />
                  <h3 className=" text-sm font-light text-[#455BB1] capitalize">
                    first road
                  </h3>
                </div>
                <p className="text-[#010A30] text-lg">23 Apr 2024</p>
              </div>
              <div className="">
                <div className="">
                  <button
                    className="w-full text-left pt-3 font-semibold text-lg flex flex-row-reverse justify-between items-center"
                    onClick={() => handleToggle(index)} // Pass the actual index here
                  >
                    <div className="flex gap-3">
                      <Image
                        src={item.imageUrl2}
                        width={20}
                        height={20}
                        alt="car"
                        className=""
                      />
                      <Image
                        src={item.imageUrl}
                        width={20}
                        height={20}
                        alt="car"
                        className=""
                      />
                    </div>
                    <span className="flex font-light text-sm items-center capitalize gap-3">
                      more details
                      <IoIosArrowDown
                        className={`transform transition-transform text-sm ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all flex items-center justify-end duration-300 ease-in-out ${
                      activeIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <p className="p-4 capitalize text-[#455BB1]">
                      {" "}
                      <span className="mr-2 text-[#B20000]">
                        {item.span}
                      </span>{" "}
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
