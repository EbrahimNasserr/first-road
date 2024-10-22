import { IoIosArrowDown } from "react-icons/io";

const Hero2 = () => {
  return (
    <section className="bg-header-gradient h-96">
      <div className=" relative container mx-auto h-full">
        <div className=" flex justify-center gap-5 w-full items-center h-full">
          <div className="flex flex-col w-full md:w-1/2 px-6 items-center gap-3">
            <div className=" flex justify-start items-start w-full md:justify-center">
              <h2 className="font-light text-slate-50">
                now you are managing :
              </h2>
            </div>

            <div className=" relative w-full">
              <select
                id="browser"
                name="browser"
                className=" w-full p-3 rounded-2xl outline-none"
              >
                <option value="home"></option>
                <option value="history">history</option>
                <option value="add new car">add new car</option>
                <option value="feedback">feedback</option>
              </select>
              <div className=" absolute -top-[1px] right-0 bg-[#455BB1] text-slate-50 p-4 rounded-r-2xl">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute -bottom-12 bg-white rounded-tl-3xl rounded-tr-3xl h-24"></div>
      </div>
    </section>
  );
};

export default Hero2;
