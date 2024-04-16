'use client'

import MainSection from "./components/layout/mainSection";
import HeroSection from "./components/layout/heroSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainSection />
    </>
  );
}
