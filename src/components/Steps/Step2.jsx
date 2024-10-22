"use client";
import { useEffect, useState } from "react";
const Step2 = () => {
  const [otp, setOtp] = useState(Array(4).fill("")); // Assuming OTP length is 6
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState(''); // State for phone number


   // Fetch the phone number from local storage
   useEffect(() => {
    const storedPhone = localStorage.getItem('phone'); // Replace 'phone' with the actual key used
    if (storedPhone) {
      setPhone(storedPhone);
    }
  }, []);


  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only digits
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move to the next input if the current input is filled
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  const handleKeyDown = (e, index) => {
    // Move to the previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    setLoading(true);
    setError(null);

    const otpCode = otp.join(""); // Join the OTP array into a single string

    try {
      const response = await fetch(
        "https://firstroadapi.echopus.com/api/auth/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp: otpCode , phone }), // Send OTP in the body
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Handle successful response
        console.log("OTP verified successfully:", data);
        // Navigate to the next step or page
      } else {
        // Handle error response
        setError(data.message || "OTP verification failed");
      }
    } catch (err) {
      // Handle network errors
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className=" h-screen bg-layer-signup-image bg-cover bg-top bg-no-repeat">
      <div className="container mx-auto flex justify-center items-center h-full flex-col px-6">
        <h1 className="text-7xl font-bold capitalize text-white mb-8">
          sign up
        </h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-5 w-full md:w-1/2" action="">
          <h2 className=" text-3xl md:text-center relative text-[#0C1844] capitalize font-bold mb-5">
            Kindly Provide With OTP
          </h2>
          <div className="flex items-center gap-3 justify-between md:justify-center py-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <p className="text-center py-3 text-xl">Resend in 0.26 s</p>

          <div className="flex justify-center">
            <button
              disabled={loading}
              type="submit"
              className="px-8 py-2 mb-5 w-full sm:w-1/2 capitalize text-slate-50 rounded-lg bg-buttonColor"
            >
              next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Step2;

// 4242
