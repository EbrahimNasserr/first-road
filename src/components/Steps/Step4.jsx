import Image from "next/image";

const Step4 = ({ nextStep }) => {
  return (
    <div className="container mx-auto flex justify-center items-center h-full flex-col px-6">
      <h1 className="text-7xl font-bold capitalize text-white mb-8">sign up</h1>
      <form className="bg-white rounded-lg w-full lg:w-1/2 p-5" action="">
        <div className=" flex  flex-col items-start md:items-center">
          <h2 className=" text-4xl relative text-[#0C1844] capitalize font-bold mb-5">
            add new car
          </h2>
        </div>

        <div>
          <input
            list="carModel-list"
            name="carModel"
            placeholder="Car Model"
            className="mb-5 w-full p-3 outline-none border-b bg-input-linear border-slate-500"
          />
          <datalist id="carModel-list" className="w-full">
            <option value="Toyota" />
            <option value="Honda" />
            <option value="Ford" />
          </datalist>

          <input
            list="carType-list"
            name="carType"
            placeholder="Car Type"
            className="mb-5 w-full p-3 outline-none border-b bg-input-linear border-slate-500"
          />
          <datalist id="carType-list" className="w-full">
            <option value="Toyota" />
            <option value="Honda" />
            <option value="Ford" />
          </datalist>

          <input
            list="date-list"
            name="date"
            placeholder="Year"
            className="mb-5 w-full p-3 outline-none border-b bg-input-linear border-slate-500"
          />
          <datalist id="date-list" className="w-full">
            <option value="Toyota" />
            <option value="Honda" />
            <option value="Ford" />
          </datalist>
        </div>

        <div className=" flex justify-center flex-col gap-2 items-center ">
          <button
            onClick={nextStep}
            type="submit"
            className="px-8 py-2 mb-5 capitalize text-slate-50 rounded-lg bg-buttonColor"
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

export default Step4;
