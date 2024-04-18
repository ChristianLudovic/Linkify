'use client'

import MainSection from "./components/layout/mainSection";
import HeroSection from "./components/layout/heroSection";
import FooterSection from "./components/layout/footerSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <MainSection />
      <FooterSection />
    </>
  );
}
