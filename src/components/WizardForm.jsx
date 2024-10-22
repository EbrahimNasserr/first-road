"use client";
import React, { useState } from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
// import { loginUser } from "./api/authSlice";
// import { useDispatch } from "react-redux";

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    username: "",
  });

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  // const prevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  return (
    <section className=" h-screen bg-layer-signup-image bg-cover bg-top bg-no-repeat">
      <div className="container mx-auto flex justify-center items-center h-full flex-col">
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        {currentStep === 4 && <Step4 />}
        {currentStep === 5 && <Step5 />}
      </div>
    </section>
  );
};

export default WizardForm;
