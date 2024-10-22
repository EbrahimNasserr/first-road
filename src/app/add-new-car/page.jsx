import ButtonNav from "@/components/utils/ButtonNav";
import Image from "next/image";

const AddNewCar = () => {
  return (
    <section className=" pb-24">
      <div className="container mx-auto flex justify-center items-center h-full gap-4 flex-col px-6">
        <div className="mt-12  w-full lg:w-1/2">
          <div className="relative w-full mb-11 flex items-center justify-center">
            <ButtonNav />
            <h1 className=" text-2xl text-left md:text-center font-medium text-[#010A30] capitalize">
              add new car
            </h1>
          </div>
          <form
            className="bg-white rounded-lg p-5 shadow-custom-shadow"
            action=""
          >
            <h2 className=" font-medium text-lg mb-5">
              Select Your Car Details
            </h2>
            <div>
              <input
                list="carModel-list"
                name="carModel"
                placeholder="Car Model"
                className="mb-5 w-full p-3 bg-[#F7F7F7] outline-none"
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
                className="mb-5 w-full p-3 bg-[#F7F7F7] outline-none"
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
                className="mb-5 w-full p-3 bg-[#F7F7F7] outline-none"
              />
              <datalist id="date-list" className="w-full">
                <option value="Toyota" />
                <option value="Honda" />
                <option value="Ford" />
              </datalist>
            </div>
          </form>
        </div>

        <form
          action=""
          className="bg-white rounded-lg w-full lg:w-1/2 p-5 shadow-custom-shadow"
        >
          <div>
            <div className=" flex  flex-col items-start">
              <h2 className=" text-xl flex justify-start items-center text-[#0C1844] capitalize font-medium mb-2">
                Car license
                <span className=" relative left-10 text-sm text-[#0C184482]">
                  (optional)
                </span>
              </h2>
              <p className=" w-full text-start leading-5 text-[#0C184482]">
                To verify your information, please take photos of both the front
                and back sides of your car license."
              </p>
            </div>

            <div className="flex justify-center items-center py-3">
              <Image src="/slider.png" width={700} height={700} alt="car" />
            </div>
          </div>
        </form>
        <div className=" flex w-full justify-center items-center">
          <button
            type="submit"
            className=" bg-[#010A30] rounded  w-full sm:w-fit sm:px-12 py-3 text-slate-50"
          >
            confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddNewCar;
