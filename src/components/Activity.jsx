"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const Activity = () => {
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
    <section className=" z-30">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <h2 className=" font-medium text-2xl z-30 text-headingColor">
            last Activity
          </h2>
          <Link
            href="/history"
            className="capitalize flex items-center z-30 gap-3 font-light text-base text-[#455BB1]"
          >
            more
            <div className="flex justify-center items-center">
              <Image src="/vector.png" width={8} height={8} alt="arrow" />
              <Image src="/vector.png" width={8} height={8} alt="arrow" />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 py-4 md:py-6">
          {accordionData.map((item, index) => (
            <div key={index} className="box z-30 bg-[#F2F2F2] p-3 rounded-xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <IoLocationOutline className=" text-[#455BB1] text-sm" />
                  <h3 className=" text-sm font-light text-[#455BB1] capitalize">
                    first road
                  </h3>
                </div>
                <p className="text-[#010A30] text-lg">23 Apr 2024</p>
              </div>
              <div className="mt-4">
                <div className="mb-4 border-b border-gray-200">
                  <button
                    className="w-full text-left py-3 font-semibold text-lg flex flex-row-reverse justify-between items-center"
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

export default Activity;
