"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import { SlCalender } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { format, parse } from "date-fns"; // for parsing and formatting

export default function CalenderComponent() {
  const [startDate, setStartDate] = useState(new Date());
  const [inputValue, setInputValue] = useState(
    format(startDate, "MMMM d, yyyy")
  );
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Try to parse the entered date
    const parsedDate = parse(newValue, "MMMM d, yyyy", new Date());

    // Check if the parsed date is valid
    if (!isNaN(parsedDate)) {
      setStartDate(parsedDate); // Update the calendar if valid
    }
  };

  // Handle date picker change
  const handleDateChange = (date) => {
    setStartDate(date);
    setInputValue(format(date, "MMMM d, yyyy")); // Update input when date picker changes
  };
  return (
    <>
      <div className="flex justify-between items-center border-[1px] border-[#DDDDDD] rounded-lg mb-2 p-3 w-full">
        <SlCalender className="text-[#AAAAAA]" />
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          className=" outline-none"
        />
        <IoMdClose
          onClick={() => {
            setStartDate(null); // Clear the date
            setInputValue("Choose Date"); // Reset the input field
          }}
          className="bg-[#AAAAAA] text-slate-50 p-1 rounded-full "
        />
      </div>
      <DatePicker selected={startDate} onChange={handleDateChange} inline />
    </>
  );
}
