import { motion } from "framer-motion";
import { Shield, Star, Users, Heart, BookOpen, Sun, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";

import outdoorImg from "@/assets/outdoor-playground.jpg";
import artImg from "@/assets/art-activities.jpg";
import readingImg from "@/assets/reading-time.jpg";
import musicImg from "@/assets/music-activities.jpg";
import heroImg from "@/assets/hero-children.jpg";
import differenceHero from "@/assets/difference-hero.jpg";
import certificationsImg from "@/assets/trs-four-star-badge.png";
import expertManagementImg from "@/assets/expert-management.jpg";
import safetyImg from "@/assets/safety-camera.jpg";
import trsRatingImg from "@/assets/trs-rating-post.png";
import lovingEnvironmentImg from "@/assets/loving-environment.jpg";
import provenCurriculumImg from "@/assets/proven-curriculum.jpg";
import enrichmentImg from "@/assets/enrichment-activities.jpg";
import Seo from "@/components/Seo";

const features = [
  {
    icon: Users,
    title: "Expert Management",
    description: "Owners Hugh (Himanshu) and Nidhi Trivedi bring advanced education degrees and hands-on leadership to Brentwood every day.",
    color: "bg-primary/10 text-primary",
    image: expertManagementImg,
    details: [
      "Owners hold multiple degrees in Education and Business Administration",
      "On-site director with over 20 years of childcare leadership experience",
      "Ongoing professional development required for all staff members",
      "Low teacher turnover means consistent, familiar faces for your child",
      "Bilingual staff available to serve Spanish-speaking families",
      "Management team actively engaged in daily operations",
    ],
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "From 4K security cameras to CPR-certified teachers, every layer of our facility is designed to keep your child safe.",
    color: "bg-secondary/10 text-secondary",
    image: safetyImg,
    details: [
      "4K security cameras covering all indoor and outdoor areas 24/7",
      "Secure keypad entry — only authorized persons may enter the facility",
      "All staff CPR, First Aid, and safe sleep certified",
      "Daily sanitization protocols and health screenings at arrival",
      "Regular fire drills, lockdown drills, and emergency preparedness training",
      "No child released without verified authorized guardian identification",
    ],
  },
  {
    icon: Star,
    title: "TRS 4-Star Rating",
    description: "Texas Rising Star's highest rating — and Center of Excellence (CoE) program participants — reflecting years of demonstrated excellence.",
    color: "bg-accent/20 text-accent-foreground",
    image: trsRatingImg,
    details: [
      "Texas Rising Star 4-Star — the highest achievable rating in Texas",
      "Active participants in the Center of Excellence (CoE) program",
      "Meets and significantly exceeds all state quality standards",
      "Regular third-party evaluations ensure continuous improvement",
      "Recognized for staff qualifications, curriculum quality, and family engagement",
      "TRS rating reflects years of sustained commitment to excellence",
    ],
  },
  {
    icon: Heart,
    title: "Loving Environment",
    description: "Small class sizes, consistent caregivers, and a genuine culture of warmth ensure every child feels truly at home.",
    color: "bg-coral/10 text-coral",
    image: lovingEnvironmentImg,
    details: [
      "Small class sizes maintained well below state maximum ratios",
      "Nurturing, family-like atmosphere in every classroom every day",
      "Encouragement-based teaching — positive reinforcement at its core",
      "Daily communication with families through reports and open-door dialogue",
      "Welcoming, inclusive environment for children of all backgrounds and abilities",
      "Se Habla Español — bilingual communication available for Spanish-speaking families",
    ],
  },
  {
    icon: BookOpen,
    title: "Proven Curriculum",
    description: "The Frog Street research-based curriculum prepares children academically, socially, and emotionally for long-term school success.",
    color: "bg-primary/10 text-primary",
    image: provenCurriculumImg,
    details: [
      "Frog Street curriculum — proven, research-backed, and Texas state-aligned",
      "Balanced approach to academics, social-emotional, and physical development",
      "Age-appropriate learning centers in every classroom environment",
      "Regular developmental assessments to track individual progress",
      "Kindergarten readiness program with consistently proven outcomes",
      "STEAM integration across all age groups and learning activities",
    ],
  },
  {
    icon: Sun,
    title: "Enrichment Activities",
    description: "Music, art, STEAM, outdoor play, and performing arts woven into every day to spark curiosity, creativity, and confidence.",
    color: "bg-secondary/10 text-secondary",
    image: enrichmentImg,
    details: [
      "Daily music, art, and creative expression activities for all ages",
      "STEAM projects introducing science, technology, engineering, and math",
      "Outdoor play and physical fitness incorporated into every daily schedule",
      "Cultural celebrations and community awareness events throughout the year",
      "Seasonal field trips to local Houston attractions",
      "Summer camp with themed adventure weeks, water play, and performing arts showcases",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Difference = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Why Families Choose Our Houston Academy | Brentwood Children's Academy"} description={"See what sets our Houston childcare apart: Texas Rising Star highest rating, Frog Street curriculum, safe classrooms and teachers who truly know your child."} path={"/difference"} />
      <Navbar />
      <main>
        <PageHero
          badge="⭐ Why Choose Us"
          title="The Brentwood"
          highlight="Difference"
          subtitle="More than childcare — a TRS 4-Star community dedicated to nurturing your child's fullest potential with expert leadership, proven curriculum, and genuine love."
          image={differenceHero}
        />

        {/* Intro summary */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeader
                label="Our promise to your family"
                title="What Sets Us Apart"
                subtitle="Six pillars of excellence define the Brentwood Children's Academy experience — and every one of them is felt the moment you walk through our doors."
              />
              <div className="grid sm:grid-cols-3 gap-4 -mt-4 mb-4">
                <div className="bg-primary/10 rounded-2xl p-5 text-center">
                  <p className="font-display font-bold text-3xl text-primary">4-Star</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Texas Rising Star Rating</p>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-5 text-center">
                  <p className="font-display font-bold text-3xl text-secondary">CoE</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Center of Excellence Member</p>
                </div>
                <div className="bg-accent/20 rounded-2xl p-5 text-center">
                  <p className="font-display font-bold text-3xl text-accent-foreground">20+</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Years of Leadership Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature cards overview */}
        <section className="pb-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={item}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Expanded sections for each feature */}
        {features.map((feature, i) => (
          <section
            key={feature.title}
            className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-green-light" : "bg-background"}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={i % 2 !== 0 ? "lg:order-2" : ""}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">{feature.title}</h2>
                        <p className="text-muted-foreground font-body text-sm mt-1">{feature.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {feature.details.map((detail, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.06 }}
                          className="bg-card rounded-xl p-4 border border-border flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-foreground font-body text-sm leading-relaxed">{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`rounded-2xl overflow-hidden h-80 md:h-96 ${feature.title === "TRS 4-Star Rating" ? "bg-[#d6eef9]" : ""} ${i % 2 !== 0 ? "lg:order-1" : ""}`}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={`w-full h-full ${feature.title === "TRS 4-Star Rating" ? "object-contain" : feature.title === "Enrichment Activities" ? "object-cover object-right" : "object-cover object-top"}`}
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <CTABlock />
      </main>
      <Footer />
    </div>
  );
};

export default Difference;
