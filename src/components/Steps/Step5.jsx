import Image from "next/image"

const Step5 = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-full flex-col px-6">
      <div className=" w-full md:w-1/2 relative flex justify-center items-center flex-col bg-white h-[620px] rounded-xl p-3">
        <div className=" absolute -top-24 flex justify-center items-center w-full">
          <Image src="/gift.png" width={200} height={200} alt="gift" />
        </div>
        <h2 className=" font-light text-4xl ">Congratulation!</h2>
        <p className=" uppercase font-normal text-center py-6 text-buttonColor text-4xl">
          free <br /> car wash
        </p>
        <div className="flex justify-center items-center">
          <button className="px-8 py-2 mb-5 uppercase text-slate-50 rounded-lg bg-buttonColor">
            get it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
