"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const Step1 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter(); // Initialize useRouter
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://firstroadapi.echopus.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            phone: phone,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Handle success
        console.log("Login successful:", data);
        router.push('/auth/otp');
        localStorage.setItem('phone', data?.data?.phone);
      } else {
        // Handle error response
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      // Handle network errors
      setError("Network error");
    }
  };
  return (
    <div className="container mx-auto flex justify-center items-center h-full flex-col px-6">
      <h1 className="text-7xl font-bold capitalize text-white mb-8">sign up</h1>
      <form onSubmit={handleLogin} className="bg-white rounded-lg p-5 lg:w-1/2 w-full" action="">
        <h2 className=" text-[#0C1844] capitalize text-2xl font-bold mb-5">
          create your account
        </h2>
        <div className="flex flex-col">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="mb-5 outline-none border-b bg-input-linear border-slate-500"
          />
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="mb-5 outline-none border-b bg-input-linear border-slate-500"
          />
        </div>
        <div className=" flex justify-center items-center ">
          <button
           
            type="submit"
            className="px-8 py-2 mb-5 w-full sm:w-1/2 capitalize text-slate-50 rounded-lg bg-buttonColor"
          >
            next
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/logo.png" width={200} height={200} alt="logo" />
        </div>
      </form>
    </div>
  );
};

export default Step1;
