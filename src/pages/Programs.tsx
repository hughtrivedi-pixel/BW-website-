import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";
import toddlerImg from "@/assets/programs-toddler.jpg";
import preschoolImg from "@/assets/programs-preschool.jpg";
import prekImg from "@/assets/programs-prek.jpg";
import schoolAgeImg from "@/assets/school-age-program.jpg";
import summerImg from "@/assets/summer-camp.jpg";
import differenceHero from "@/assets/difference-hero.jpg";
import Seo from "@/components/Seo";

const programs = [
  {
    title: "Infant & Toddler",
    ages: "6 weeks – 2 years",
    description: "A warm, safe nursery environment with low teacher-to-child ratios, gentle daily routines, sensory exploration, and bonding activities that support every developmental milestone.",
    image: toddlerImg,
    link: "/programs/infant-toddler",
    highlights: ["Low ratios exceeding state requirements", "Daily sensory exploration", "Language & motor development", "Loving, consistent caregivers"],
  },
  {
    title: "Preschool",
    ages: "3 – 4 years",
    description: "Creative, play-based Frog Street curriculum focusing on early literacy, math fundamentals, social-emotional skills, and hands-on discovery that builds a lifelong love of learning.",
    image: preschoolImg,
    link: "/programs/preschool",
    highlights: ["Frog Street research-based curriculum", "Early literacy & phonics", "Math foundations & counting", "Social-emotional development"],
  },
  {
    title: "Pre-Kindergarten",
    ages: "4 – 5 years",
    description: "A comprehensive school-readiness program that builds confidence, independence, and strong academic foundations in reading, writing, and math to ensure kindergarten success.",
    image: prekImg,
    link: "/programs/pre-kindergarten",
    highlights: ["Kindergarten readiness focus", "Reading & writing foundations", "STEAM exposure and exploration", "Critical thinking skills"],
  },
  {
    title: "School Age / Varsity Club",
    ages: "5 – 12 years",
    description: "Before and after-school care with dedicated homework assistance, enrichment activities, organized sports, and meaningful social development in a safe, supervised environment.",
    image: schoolAgeImg,
    link: "/programs/school-age",
    highlights: ["Homework help with teacher support", "STEAM enrichment projects", "Organized sports & outdoor play", "Leadership development"],
  },
  {
    title: "Summer Camp",
    ages: "All Ages",
    description: "An exciting summer adventure with weekly themed units, field trips to local attractions, water play, STEAM challenges, performing arts, and creative projects to keep minds active all summer.",
    image: summerImg,
    link: "/programs/summer-camp",
    highlights: ["Weekly themed adventure units", "Field trips to museums & parks", "Water play & outdoor activities", "Arts, STEAM & performing arts"],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Childcare Programs in Houston, TX | Brentwood Children's Academy"} description={"Explore our Houston childcare programs for every age: infants, toddlers, preschool, pre-kindergarten, school age Varsity Club and themed summer camp fun."} path={"/programs"} />
      <Navbar />
      <main>
        <PageHero
          badge="🎓 Our Programs"
          title="Programs for Every"
          highlight="Stage"
          subtitle="From infants to school age, our age-appropriate programs help every child thrive with love, learning, and laughter."
          image={differenceHero}
        />

        {/* Intro */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeader
                label="Age-appropriate learning"
                title="Find the Right Program"
                subtitle="Each program at Brentwood Children's Academy is thoughtfully designed to meet the developmental needs of your child's unique stage — from a 6-week-old infant to a 12-year-old Varsity Club member."
              />
              <div className="grid sm:grid-cols-3 gap-6 -mt-4">
                {[
                  { label: "Texas Rising Star", value: "4-Star Rated", color: "bg-accent/10 text-accent-foreground" },
                  { label: "Ages Served", value: "6 Weeks – 12 Years", color: "bg-primary/10 text-primary" },
                  { label: "Location", value: "Houston, TX", color: "bg-secondary/10 text-secondary" },
                ].map((stat) => (
                  <div key={stat.label} className={`${stat.color} rounded-2xl p-6 border border-border`}>
                    <p className="font-display font-bold text-2xl">{stat.value}</p>
                    <p className="font-body text-sm mt-1 opacity-70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Program Cards */}
        <section className="pb-20 md:pb-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, i) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={program.link}
                    className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group block h-full"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold font-body px-3 py-1 rounded-full">
                        {program.ages}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">{program.title}</h3>
                      <p className="text-muted-foreground font-body leading-relaxed text-sm mb-4">{program.description}</p>
                      <ul className="space-y-1.5 mb-4">
                        {program.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-foreground font-body text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-block text-primary font-body font-bold text-sm group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
