// import Image from "next/image";
import HeroSection from "./HeroSection/page";
import CtaSection from "./cta-section/[id]/page";

export default function Home() {
  return (
    <>
      <HeroSection id={"hashing"} />
      <CtaSection />
    </>
  );
}
