import Footer from "@/components/Footer";
import ButtonNav from "@/components/utils/ButtonNav";
import { FaRegStar } from "react-icons/fa";

const Feedback = () => {
  return (
    <section className="">
      <div className="container mx-auto flex justify-center items-center h-full gap-12 flex-col px-6">
        <div className="mt-12   w-full lg:w-1/2">
          <div className="flex w-full justify-center relative items-center mb-14">
            <ButtonNav />
            <h1 className=" text-2xl text-center text-[#0C1844] capitalize font-medium">
              Feedback
            </h1>
          </div>
          <div className="bg-white rounded-lg p-5 shadow-custom-shadow">
            <form action="">
              <div className="flex justify-evenly items-center text-4xl gap-3 pt-6">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <textarea
                className=" bg-[#EFEFEF] w-full outline-none p-3 mt-8 rounded-lg"
                name="feedback"
                cols={82}
                placeholder="Tell us what can be improved ?"
                rows={10}
                id=""
              ></textarea>
            </form>
          </div>
          <div className=" flex justify-center mt-3 items-center">
            <button
              type="submit"
              className=" bg-[#010A30] rounded w-full sm:w-fit sm:px-12 py-3 text-slate-50"
            >
              confirm
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Feedback;
