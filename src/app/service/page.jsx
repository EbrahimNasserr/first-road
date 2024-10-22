"use client";
import ButtonNav from "@/components/utils/ButtonNav";
import CalenderComponent from "@/components/utils/CalenderComponent";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Service = () => {
  // State to keep track of the selected service
  const [selectedService, setSelectedService] = useState("Banchar");

  // Components for each service
  const OilComponent = () => (
    <div className="flex flex-col items-center">
      <div className="flex justify-start w-full sm:justify-center">
        <label
          htmlFor="oil-type"
          className="text-xl capitalize font-medium pb-3 pt-5"
        >
          oil type
        </label>
      </div>
      <div className=" relative w-full md:w-1/2">
        <select
          className=" p-3 bg-[#EFEFEF] w-full rounded-2xl outline-none"
          name="oil-type"
          id="oil-type"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div className=" absolute top-[3px] right-0 bg-[#455BB1] text-slate-50 p-3 rounded-r-lg">
          <IoIosArrowDown />
        </div>
      </div>
      <div className="flex justify-start w-full sm:justify-center">
        <label
          htmlFor="amountOfOil"
          className="text-xl capitalize font-medium pb-3 pt-3"
        >
          Amount of oil needed.
        </label>
      </div>
      <input
        type="number"
        className=" p-3 bg-[#EFEFEF] w-full rounded-2xl outline-none"
        name="amountOfOil"
        id="amountOfOil"
      />
      <div className="flex justify-start w-full sm:justify-center">
        <h3 className="mt-4 text-lg font-medium">Date of last oil change</h3>
      </div>
      <CalenderComponent />
      {/* <div className="flex justify-center items-center w-full mt-5">
        <button
          type="submit"
          className="bg-[#010A30] w-full p-3 rounded text-slate-50"
        >
          confirm
        </button>
      </div> */}
    </div>
  );

  const CarCleaningComponent = () => (
    <div className="flex flex-col items-center">
      <div className="flex justify-start w-full sm:justify-center">
        <label htmlFor="oil-type" className="text-xl font-medium pb-3 pt-5">
          Type of cleaning
        </label>
      </div>
      <select
        className=" p-3 bg-[#EFEFEF] w-full rounded-2xl outline-none"
        name="oil-type"
        id="oil-type"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div className="flex justify-start w-full sm:justify-center">
        <label htmlFor="amount-oil" className="text-sm font-medium pb-3 pt-5">
          Do you need a full tire replacement or just a repair?
        </label>
      </div>
      <form className="flex justify-between items-center flex-col w-full mt-2">
        <div className="flex items-center w-full gap-3 justify-evenly mb-5">
          <div className=" bg-[#eee] w-[160px] h-[34px] flex justify-start p-3 items-center rounded-full">
            <input type="radio" name="r" id="repair" />
            <label htmlFor="repair" className="ml-2 uppercase">
              fabrics
            </label>
          </div>
          <div className=" bg-[#eee] w-[160px] h-[34px] flex justify-start p-3 items-center rounded-full">
            <input type="radio" name="r" id="replacement" />
            <label htmlFor="replacement" className=" ml-2 uppercase">
              seats
            </label>
          </div>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Any specific areas to focus on, such as windows or rims?"
          className="w-full bg-[#eee] p-3 rounded-2xl outline-none"
        ></textarea>
      </form>
      <div className="flex justify-start w-full sm:justify-center">
        <h3 className="mt-4 text-xl font-medium">Reminder Date</h3>
      </div>
      <CalenderComponent />
      {/* <div className="flex justify-center items-center w-full mt-5">
        <button
          type="submit"
          className="bg-[#010A30] w-full p-3 rounded text-slate-50"
        >
          confirm
        </button>
      </div> */}
    </div>
  );

  const BancharComponent = () => (
    <div className="flex flex-col items-center">
      <div className="flex justify-start w-full sm:justify-center">
        <p className="text-xl font-medium pb-1 pt-5">Number of tires</p>
      </div>
      <input
        type="number"
        name="tire"
        id=""
        className=" p-3 bg-[#EFEFEF] w-full rounded-lg outline-none"
      />
      <h3 className="my-3 text-sm font-medium leading-4  sm:text-center">
        Do you need a full tire replacement or just a repair?
      </h3>
      <form className="flex justify-between w-full mt-2">
        <div className="flex justify-evenly gap-3 w-full">
          <div className=" bg-[#eee]  w-[160px] h-[34px] flex justify-start p-3 items-center rounded-full">
            <input type="radio" name="r" id="repair" />
            <label htmlFor="repair" className="ml-2 text-sm uppercase">
              repair
            </label>
          </div>
          <div className=" bg-[#eee] w-[160px] h-[34px] flex justify-start p-3 items-center rounded-full">
            <input type="radio" name="r" id="replacement" />
            <label htmlFor="replacement" className=" text-sm ml-2 uppercase">
              replacement
            </label>
          </div>
        </div>
      </form>
      <div className="flex justify-start w-full sm:justify-center">
        <h3 className="mt-4 mb-2 text-xl font-medium">Reminder Date</h3>
      </div>
      <CalenderComponent />
      {/* <div className="flex justify-center items-center w-full mt-5">
        <button
          type="submit"
          className="bg-[#010A30] w-full p-3 rounded text-slate-50"
        >
          confirm
        </button>
      </div> */}
    </div>
  );

  // Function to handle service selection
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex w-[100%] mb-5 justify-center relative items-center">
          <ButtonNav />
          <h1 className=" text-2xl text-center text-[#0C1844] capitalize font-medium">
            service dashboard
          </h1>
        </div>
        <div className=" shadow-custom-shadow rounded-xl flex flex-col items-center justify-center p-6">
          <Image
            src="/user.png"
            width={70}
            height={70}
            alt="user"
            className="bg-[#455BB1] p-3 rounded-full"
          />
          <p className=" font-bold text-2xl text-[#455BB1] capitalize">
            username
          </p>
          <h2 className="font-light flex justify-start items-start w-full md:justify-center text-[#455BB1] mt-5">
            now you are managing :
          </h2>

          <div className=" relative w-full md:w-1/2">
            <select
              id="browser"
              name="browser"
              className=" bg-[#eee] w-full p-3 rounded-lg outline-none"
            >
              <option value="home"></option>
              <option value="history">history</option>
              <option value="add new car">add new car</option>
              <option value="feedback">feedback</option>
            </select>
            <div className=" absolute top-[3px] right-0 bg-[#455BB1] text-slate-50 p-3 rounded-r-lg">
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        <div className=" mt-5">
          <div className=" shadow-custom-shadow rounded-xl flex flex-col items-center justify-center p-6">
            <div className="flex justify-start w-full sm:justify-center items-start">
              <h1 className="text-xl font-medium pb-3">Selected Worker</h1>
            </div>
            <div className=" relative w-full md:w-1/2">
              <select
                id="browser"
                name="browser"
                className=" w-full p-3 rounded-lg outline-none bg-[#eee]"
              >
                <option value="home"></option>
                <option value="history">history</option>
                <option value="add new car">add new car</option>
                <option value="feedback">feedback</option>
              </select>
              <div className=" absolute top-[3px] right-0 bg-[#455BB1] text-slate-50 p-3 rounded-r-lg">
                <IoIosArrowDown />
              </div>
            </div>
            <div className="flex justify-start w-full sm:justify-center">
              <h2 className="text-xl font-medium pt-5">Selected Service</h2>
            </div>
            <div className="flex justify-between gap-2 w-full sm:w-1/2 mt-3">
              <button
                onClick={() => handleServiceClick("Oil")}
                className={`p-2 w-[104.03px] h-[127.15px] font-semibold text-xs text-center bg-[#eee]  flex justify-center flex-col items-center gap-2 rounded ${
                  selectedService === "Oil"
                    ? "bg-header-gradient text-slate-50"
                    : "text-[#0C184480]"
                }`}
              >
                <Image src="/gas.png" width={50} height={50} alt="oil" />
                Oil
              </button>
              <button
                onClick={() => handleServiceClick("CarCleaning")}
                className={`p-2 w-[104.03px] h-[127.15px] font-semibold text-xs text-center bg-[#eee]  flex justify-center flex-col items-center gap-2 rounded ${
                  selectedService === "CarCleaning"
                    ? "bg-header-gradient text-slate-50"
                    : "text-[#0C184480]"
                }`}
              >
                <Image src="/carWashing.png" width={50} height={50} alt="car" />
                Car Cleaning
              </button>
              <button
                onClick={() => handleServiceClick("Banchar")}
                className={`p-2 w-[104.03px] h-[127.15px] font-semibold text-xs text-center bg-[#eee]  flex justify-center flex-col items-center gap-2 rounded ${
                  selectedService === "Banchar"
                    ? "bg-header-gradient text-slate-50"
                    : "text-[#0C184480]"
                }`}
              >
                <Image src="/bancher.svg" width={50} height={50} alt="tire" />
                Banchar
              </button>
            </div>
            <div className="w-full sm:w-1/2">
              {selectedService === "Oil" && <OilComponent />}
              {selectedService === "CarCleaning" && <CarCleaningComponent />}
              {selectedService === "Banchar" && <BancharComponent />}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-5">
          <button
            type="submit"
            className="bg-[#010A30] w-full p-3 rounded text-slate-50"
          >
            confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
