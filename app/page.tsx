import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Trust from "@/components/Trust";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Calculator />
        <Trust />
        <BeforeAfter />
        <Process />
        <Gallery />
        <VideoSection />
        <Testimonials />
        <Team />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
