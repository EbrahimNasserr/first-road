import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <section className="bg-hero-gradient">
      <div className="container mx-auto">
        <div className="h-screen overflow-hidden">
          <motion.div
            style={{ y }}
            className=" flex justify-center gap-5 flex-col items-center h-full"
          >
            <div className="flex gap-5 items-center">
              <Image
                src="/hero2.jpg"
                width={300}
                height={300}
                 className=" object-cover bg-center bg-cover w-64 h-64 rounded-[50%]"
              />
              <h1 className="text-6xl font-bold uppercase">Drive Clean</h1>
            </div>
            <div className="flex items-center gap-5">
              <h1 className="text-6xl font-bold uppercase">Shine Brighter</h1> <Image src="/hero.jpg" width={300} height={300} className=" object-cover bg-center bg-cover w-64 h-64 rounded-[50%]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
