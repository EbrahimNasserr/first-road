"use client";
import Image from "next/image";
import { useState } from "react";
import {
  useGetServiceCategoryQuery,
  useGetServiceInCategoryQuery,
} from "./api/GetSlice";

const Services = () => {
  const [selectedService, setSelectedService] = useState("Car Cleaning");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const { data } = useGetServiceCategoryQuery();
  const { data: offers } = useGetServiceInCategoryQuery(1);
  console.log(offers);

  // const services = ["Oil", "Car Cleaning", "Banchar"];
  // const offers = [
  //   {
  //     id: 1,
  //     service: "Car Cleaning",
  //     label: "30% OFF",
  //     content: "Tap Here to Select",
  //   },
  //   {
  //     id: 2,
  //     service: "Car Cleaning",
  //     label: "",
  //     content: "Tap Here to Select",
  //     icon: "/carWashing.png",
  //   },
  //   {
  //     id: 3,
  //     label: "",
  //     service: "Car Cleaning",
  //     content: "Tap Here to Select",
  //     icon: "/carWashing.png",
  //   },
  //   {
  //     id: 4,
  //     service: "Car Cleaning",
  //     label: "30% OFF",
  //     content: "Tap Here to Select",
  //   },
  //   {
  //     id: 5,
  //     service: "Car Cleaning",
  //     label: "",
  //     content: "Tap Here to Select",
  //     icon: "/carWashing.png",
  //   },
  //   {
  //     id: 6,
  //     label: "",
  //     service: "Car Cleaning",
  //     content: "Tap Here to Select",
  //     icon: "/carWashing.png",
  //   },
  //   { id: 7, label: "10% OFF", content: "Tap Here to Select" },
  //   { id: 8, label: "FREE CAR WASH", content: "Tap Here to Select" },
  //   {
  //     id: 9,
  //     service: "Car Cleaning",
  //     service: "Oil",
  //     label: "20% OFF",
  //     content: "Tap Here to Select",
  //   },
  //   {
  //     id: 10,
  //     service: "Oil",
  //     label: "Buy 2 Get 1 Free",
  //     content: "Tap Here to Select",
  //   },
  //   {
  //     id: 11,
  //     service: "Banchar",
  //     label: "50% OFF",
  //     content: "Tap Here to Select",
  //   },
  //   {
  //     id: 12,
  //     service: "Banchar",
  //     label: "Free Service",
  //     content: "Tap Here to Select",
  //   },
  // ];

  // Filter offers based on selected service
  const filteredOffers = offers?.data?.filter(
    (offer) => offer.service === selectedService
  );

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setSelectedOffer(null); // Reset offer selection when changing service
  };

  const handleOfferClick = (id) => {
    setSelectedOffer(id);
  };

  return (
    <section className="md:py-6">
      <div className="container mx-auto px-6">
        <div>
          <h2 className=" capitalize text-headingColor font-medium text-2xl">
            services
          </h2>

          {/* Service Selection */}
          <div className="flex justify-evenly gap-2 flex-row md:justify-center py-4">
            {data?.data?.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.name)}
                className={` px-[27px] h-[39.29px] font-semibold text-xs rounded-lg ${
                  selectedService === service.name
                    ? "bg-[#455BB1] shadow-custom2-shadow text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          <p className="text-gray-500 mb-6">
            Follow the card order to unlock all the offers.
          </p>

          {/* Offer Cards */}
          <div className="grid grid-cols-3 gap-2">
            {filteredOffers?.map((offer) => (
              <div
                key={offer.id}
                onClick={() => handleOfferClick(offer.id)}
                className={`p-3 rounded-lg text-center cursor-pointer ${
                  selectedOffer === offer.id
                    ? "bg-gray-200 border-2"
                    : "bg-[#010A30] text-white"
                }`}
              >
                {selectedOffer === offer.id ? (
                  <div>
                    <span className="block text-3xl text-blue-600 mb-2">
                      ✔️
                    </span>
                    <p className="text-lg font-semibold">Taken</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xl font-normal flex justify-center mb-2">
                      {offer.label || (
                        <Image
                          src={offer.icon}
                          alt="icon"
                          width={50}
                          height={50}
                        />
                      )}
                    </p>
                    <p className="text-xs">{offer.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
