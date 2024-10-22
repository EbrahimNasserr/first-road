"use client";
// import Description from "@/components/Description";
// import Hero from "@/components/Hero";
// import Section from "@/components/Section";
import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/components/Header";
import Hero2 from "@/components/Hero2";
import Activity from "@/components/Activity";
import Claim from "@/components/Claim";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      {/* <Hero />
      <Description />
      <Section /> */}
      <Header />
      <Hero2 />
      <Activity />
      <Claim />
      <Services />
      <Footer />
    </main>
  );
}
