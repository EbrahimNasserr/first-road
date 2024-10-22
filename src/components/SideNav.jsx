import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav({ open, setOpen }) {
  const pathname = usePathname();
  return (
    <div
      className={`fixed right-0 bg-slate-200 top-0 w-full h-screen z-[9999] duration-1000 ${
        open ? " visible translate-y-0" : "invisible -translate-y-full"
      }`}
    >
      <button
        className=" text-4xl text-slate-950 absolute right-0 pr-10 pt-10"
        onClick={() => {
          setOpen(!open);
        }}
      >
        x
      </button>
      <nav className=" flex text-slate-950 flex-col text-xl font-bold items-center py-52 justify-around h-full">
        <Link
          href="/"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/"
              ? "underline underline-offset-[10px] decoration-2 decoration-[#455BB1] text-[#455BB1] rounded-lg"
              : ""
          }`}
        >
          HOME
        </Link>
        <Link
          href="/history"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/history"
              ? "underline underline-offset-[10px] decoration-2 decoration-[#455BB1] rounded-lg  text-[#455BB1]"
              : ""
          }`}
        >
          HISTORY
        </Link>
        <Link
          href="/add-new-car"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/add-new-car"
              ? "underline underline-offset-[10px] decoration-2 decoration-[#455BB1] rounded-lg  text-[#455BB1]"
              : ""
          }`}
        >
          ADD NEW CAR
        </Link>
        <Link
          href="/feedback"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/feedback"
              ? "underline underline-offset-[10px] decoration-2 decoration-[#455BB1] rounded-lg  text-[#455BB1]"
              : ""
          }`}
        >
          FEEDBACK
        </Link>
        <Link
          href="/branches"
          onClick={() => {
            setOpen(!open);
          }}
          className={`${
            pathname === "/branches"
              ? "underline underline-offset-[10px] decoration-2 decoration-[#455BB1] rounded-lg  text-[#455BB1]"
              : ""
          }`}
        >
          BRANCHES
        </Link>
      </nav>
    </div>
  );
}