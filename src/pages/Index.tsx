import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DifferenceSection from "@/components/DifferenceSection";
import ProgramsSection from "@/components/ProgramsSection";
import TuitionSection from "@/components/TuitionSection";
import LocationsSection from "@/components/LocationsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import JsonLd from "@/components/JsonLd";

const childCareSchema = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: "Brentwood Children's Academy",
  url: "https://brentwoodchildrensacademy.com",
  telephone: "+1-713-466-9407",
  email: "info@brentwoodchildrensacademy.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7210 N. Eldridge Pkwy",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77041",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "06:30",
    closes: "18:00",
  },
  award: [
    "Texas Rising Star 4-Star (highest) certification",
    "Center of Excellence participant",
  ],
  founder: [
    { "@type": "Person", name: "Hugh Trivedi" },
    { "@type": "Person", name: "Nidhi Trivedi" },
  ],
  areaServed: ["Houston", "Copperfield", "Jersey Village", "Energy Corridor", "Bear Creek", "Cypress"],
  sameAs: ["https://www.facebook.com/BrentwoodChildrensAcademy/"],
  description:
    "Texas Rising Star 4-Star rated childcare and preschool in Houston, TX serving children 6 weeks through 12 years. Accepts CCMS and Workforce Solutions subsidies.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Childcare Programs",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infant & Toddler", description: "Ages 6 weeks – 2 years" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Preschool", description: "Ages 3 – 4 years" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Kindergarten", description: "Ages 4 – 5 years" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "School Age / Varsity Club", description: "Ages 5 – 12 years" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Summer Camp", description: "All ages" } },
    ],
  },
};

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
