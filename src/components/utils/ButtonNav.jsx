"use client"
import { useRouter } from "next/navigation";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const ButtonNav = () => {
  const router = useRouter();
  return (
    <button className="text-2xl absolute left-0" onClick={() => router.back()}>
      <MdKeyboardDoubleArrowLeft />
    </button>
  );
};

export default ButtonNav;
