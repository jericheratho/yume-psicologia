/* ============================================================
   Home Page — Yume Psicologia
   Sections: Hero, Services, About, Team, HowItWorks,
             Testimonials, FAQ, CTABanner, Footer
   ============================================================ */
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Difference from "@/components/sections/Difference";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Booking from "@/components/sections/Booking";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Difference />
      <Services />
      <About />
      <Team />
      <Booking />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}
