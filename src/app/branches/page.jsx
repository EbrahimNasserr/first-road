"use client";
import Image from "next/image";
import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ButtonNav from "@/components/utils/ButtonNav";
import { useGetBranchesQuery } from "@/components/api/GetSlice";

const Branches = () => {
  const { data } = useGetBranchesQuery();
  console.log(data);
  const [selectedTab, setSelectedTab] = useState("Branches");
  const [selectedBranch, setSelectedBranch] = useState(null);
  // Custom marker icon (use a PNG image or default leaflet marker)
  const customMarkerIcon = new L.Icon({
    iconUrl: "/location.png",
    iconSize: [32, 32],
  });
  const branches = [
    {
      id: 1,
      name: "First Road 1",
      phone: "+962 (6) 555-1234",
      address:
        "12 King Hussein Street, Al Abdali District, Amman, Jordan 11190",
      image: "/branche1.png",
      location: { lat: 31.963158, lng: 35.930359 }, // Example coordinates
    },
    {
      id: 2,
      name: "First Road 2",
      phone: "+962 (6) 555-1234",
      address:
        "12 King Hussein Street, Al Abdali District, Amman, Jordan 11190",
      image: "/branche2.png",
      location: { lat: 31.964158, lng: 35.931359 },
    },
    {
      id: 3,
      name: "First Road 3",
      phone: "+962 (6) 555-1234",
      address:
        "12 King Hussein Street, Al Abdali District, Amman, Jordan 11190",
      image: "/branche3.png",
      location: { lat: 31.965158, lng: 35.932359 },
    },
    {
      id: 4,
      name: "First Road 4",
      phone: "+962 (6) 555-1234",
      address:
        "12 King Hussein Street, Al Abdali District, Amman, Jordan 11190",
      image: "/branche3.png",
    },
  ];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
    setSelectedTab("MAP"); // Switch to the map tab
  };

  return (
    <section className=" py-12">
      <div className="container mx-auto p-6">
        <div className=" mb-5 bg-white w-full p-3 rounded-lg shadow-custom3-shadow z-50 flex justify-center items-center mx-auto relative">
          <ButtonNav />
          <h1 className="text-2xl text-center font-medium">Branches</h1>
        </div>
        <div className="flex z-50 bg-gray-200 rounded-lg justify-between mb-6">
          {/* Tabs */}
          <button
            onClick={() => handleTabClick("MAP")}
            className={`w-1/2 z-50 py-2 rounded-lg ${
              selectedTab === "MAP"
                ? "bg-[#455BB1] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            MAP
          </button>
          <button
            onClick={() => handleTabClick("Branches")}
            className={`w-1/2 z-50 py-2 rounded-lg ${
              selectedTab === "Branches"
                ? "bg-[#455BB1] text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Branches
          </button>
        </div>

        {/* Conditionally render based on the selected tab */}
        {selectedTab === "Branches" && (
          <div className="grid gap-6">
            {data?.data?.map((branch) => (
              <div
                key={branch.id}
                className="flex items-start p-4 py-6 bg-white shadow rounded-xl"
                onClick={() => handleBranchClick(branch)}
              >
                <Image
                  src={branch.image}
                  alt={branch.name}
                  className=" h-full rounded-lg mr-4 object-cover"
                  width={200}
                  height={200}
                />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{branch.name}</h3>
                  <p className="text-gray-500 mb-2 font-light text-sm flex items-center">
                    <span className="mr-2  text-[#455BB1]">🎧</span>
                    {branch.phone}
                  </p>
                  <p className="text-[#102341]  font-light text-sm line-clamp-1 flex items-center">
                    <span className="mr-2">
                      <SlLocationPin />
                    </span>
                    {branch.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === "MAP" && (
          <div className="w-full z-10 absolute left-0 right-0 top-0 bottom-0">
            <iframe
              src={data?.data?.map((branch) => branch.location)}
              allowFullScreen
              className=" w-full h-screen"
              frameborder="0"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default Branches;
