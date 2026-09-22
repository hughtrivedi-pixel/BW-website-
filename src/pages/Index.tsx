import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DifferenceSection from "@/components/DifferenceSection";
import ProgramsSection from "@/components/ProgramsSection";
import TuitionSection from "@/components/TuitionSection";
import LocationsSection from "@/components/LocationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Childcare & Preschool in Houston, TX | Brentwood Children's Academy"} description={"Texas Rising Star highest-rated childcare and preschool in Houston, TX. Infant, toddler, preschool, pre-K, school age and summer camp programs."} path={"/"} />
      <Navbar />
      <main>
        <HeroSection />
        <DifferenceSection />
        <ProgramsSection />
        <TuitionSection />
        <LocationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
