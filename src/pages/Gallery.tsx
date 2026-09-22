import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";
import heroImg from "@/assets/hero-children.jpg";
import infantClassroom from "@/assets/infant-classroom.jpg";
import preschoolClassroom from "@/assets/preschool-classroom.jpg";
import prekClassroom from "@/assets/prek-classroom.jpg";
import schoolAgeImg from "@/assets/school-age-program.jpg";
import summerCampImg from "@/assets/summer-camp.jpg";
import staffTeam from "@/assets/staff-team.jpg";
import artImg from "@/assets/art-activities.jpg";
import musicImg from "@/assets/music-activities.jpg";
import outdoorImg from "@/assets/outdoor-playground.jpg";
import celebrationImg from "@/assets/celebration-event.jpg";
import infantRoomImg from "@/assets/infant-room.jpg";
import fieldTripImg from "@/assets/field-trip.jpg";
import readingImg from "@/assets/reading-time.jpg";
import toddlerPlayImg from "@/assets/toddler-play.jpg";
import familiesImg from "@/assets/families-dropoff.jpg";
import leadershipImg from "@/assets/leadership-team.jpg";
import exteriorImg from "@/assets/center-exterior.jpg";
import Seo from "@/components/Seo";

const galleryGroups = [
  {
    title: "Our Classrooms",
    description: "Bright, stimulating, and carefully organized learning environments for every age group.",
    photos: [
      { src: infantClassroom, alt: "Infant & toddler classroom with colorful toys and shelves" },
      { src: preschoolClassroom, alt: "Preschool circle time with teacher reading a book" },
      { src: prekClassroom, alt: "Pre-K children writing at their desks" },
      { src: infantRoomImg, alt: "Safe, cozy infant sleep room" },
    ],
  },
  {
    title: "Learning Activities",
    description: "Hands-on, engaging activities that make learning joyful and meaningful every day.",
    photos: [
      { src: artImg, alt: "Children painting and doing art projects" },
      { src: musicImg, alt: "Music class with instruments and singing" },
      { src: readingImg, alt: "Story time in the cozy reading nook" },
      { src: toddlerPlayImg, alt: "Toddlers playing with colorful blocks" },
    ],
  },
  {
    title: "Outdoor Play",
    description: "Safe, supervised outdoor spaces designed for active play and nature exploration.",
    photos: [
      { src: outdoorImg, alt: "Children playing on colorful outdoor playground equipment" },
      { src: summerCampImg, alt: "Summer camp water play fun" },
      { src: fieldTripImg, alt: "Children on a field trip to a local attraction" },
      { src: schoolAgeImg, alt: "School age STEAM activities" },
    ],
  },
  {
    title: "Events & Community",
    description: "Celebrations, family events, and community moments that make Brentwood feel like home.",
    photos: [
      { src: celebrationImg, alt: "Academy-wide holiday celebration with families" },
      { src: familiesImg, alt: "Families and children at drop-off time" },
      { src: staffTeam, alt: "Our dedicated team of educators" },
      { src: leadershipImg, alt: "Owners Hugh and Nidhi Trivedi in the hallway" },
    ],
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Photo Gallery of Our Houston Academy | Brentwood Children's Academy"} description={"Take a look inside our Houston, TX childcare center: bright classrooms, outdoor playgrounds, STEAM activities, celebrations and everyday learning moments."} path={"/gallery"} />
      <Navbar />
      <main>
        <PageHero badge="📸 Photo Gallery" title="See Brentwood" highlight="in Action" subtitle="A glimpse inside our classrooms, play areas, activities, and the community that makes Brentwood so special." image={heroImg} />

        {galleryGroups.map((group, gi) => (
          <section key={group.title} className={`py-20 md:py-24 ${gi % 2 === 0 ? "bg-background" : "bg-green-light"}`}>
            <div className="container mx-auto px-4">
              <SectionHeader label={`Gallery — ${gi + 1} of ${galleryGroups.length}`} title={group.title} subtitle={group.description} />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {group.photos.map((photo, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`rounded-2xl overflow-hidden ${i === 0 ? "col-span-2 row-span-2 h-64 md:h-auto" : "h-40 md:h-44"}`}
                  >
                    <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Exterior */}
        <section className="py-16 bg-cream-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden h-72">
                <img src={exteriorImg} alt="Brentwood Children's Academy building exterior" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-muted-foreground font-body mt-4 text-sm">Our welcoming facility — designed to feel like home for every child.</p>
            </div>
          </div>
        </section>

        <CTABlock title="Like What You See?" subtitle="Schedule a tour and experience Brentwood in person. We'd love to welcome your family." />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
