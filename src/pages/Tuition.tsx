import { motion } from "framer-motion";
import { DollarSign, FileText, Gift, Users, CheckCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";
import familiesImg from "@/assets/tuition-classroom.jpg";
import differenceHero from "@/assets/difference-hero.jpg";
import Seo from "@/components/Seo";

const tuitionCards = [
  {
    icon: DollarSign,
    title: "Competitive, Transparent Rates",
    description: "We offer clear, straightforward pricing with absolutely no hidden fees. Our rates are designed to reflect the exceptional quality of care and education your child receives — while remaining accessible to the families we serve.",
    color: "bg-primary/10 text-primary",
    details: [
      "Age-appropriate pricing tiers for each program",
      "Weekly and monthly payment options available",
      "No registration fees, no hidden charges",
      "Transparent billing statements every billing cycle",
      "Competitive pricing compared to other TRS Highest Rank centers",
    ],
  },
  {
    icon: FileText,
    title: "Subsidy Assistance",
    description: "We proudly accept CCMS (Child Care Management Services) and Workforce Solutions subsidies — and our team actively helps guide families through the application process from start to finish.",
    color: "bg-secondary/10 text-secondary",
    details: [
      "CCMS (Child Care Management Services) acceptede Solutions subsidies warmly welcomed",
      "Our team guides you through the application process",
      "We work directly with subsidy programs on your behalf",
      "Bilingual support available for Spanish-speaking families",
    ],
  },
  {
    icon: Users,
    title: "Sibling Discounts",
    description: "Families with multiple children enrolled receive meaningful sibling discounts — because we believe quality early education should be accessible for every child in your family.",
    color: "bg-accent/20 text-accent-foreground",
    details: [
      "Generous discounts for second and additional enrolled children",
      "Discounts apply across all age programs",
      "Can be combined with subsidy programs",
      "Contact us directly for customized family rate details",
      "We work with families to find the most affordable option",
    ],
  },
  {
    icon: Gift,
    title: "Current Promotions",
    description: "Take advantage of our latest enrollment offers. We regularly offer seasonal and referral incentives to make quality childcare even more accessible.",
    color: "bg-coral/10 text-coral",
    details: [
      "Current enrollment specials available — ask us for details",
      "Seasonal promotional rates for new family enrollments",
      "Referral bonus program for currently enrolled families",
      "Ask about limited-time summer camp enrollment discounts",
      "Follow us for updates on the latest offers and promotions",
    ],
  },
];

const Tuition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Childcare Tuition & Financial Aid in Houston, TX | Brentwood Children's Academy"} description={"Clear childcare tuition rates for our Houston, TX academy, plus information on financial aid, subsidy assistance and what every weekly rate includes."} path={"/tuition"} />
      <Navbar />
      <main>
        <PageHero
          badge="💰 Tuition & Financial Aid"
          title="Affordable Quality"
          highlight="Care"
          subtitle="We believe every family deserves access to exceptional childcare. Explore our flexible, transparent options — and let us help you find the best fit."
          image={differenceHero}
        />


        {/* Intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionHeader
                    label="Investment in their future"
                    title="Making Quality Care Accessible"
                    subtitle=""
                  />
                  <p className="text-muted-foreground font-body text-lg leading-relaxed -mt-10 mb-5">
                    Quality early childhood education is one of the most valuable investments you can make in your child's future. At Brentwood Children's Academy, we've made it our mission to ensure financial barriers don't prevent any family from accessing exceptional care.
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">
                    From competitive transparent pricing to government subsidy programs, sibling discounts, and seasonal promotions — we offer multiple pathways to make Brentwood work for your family's budget. Our team is always happy to have a personal conversation about your situation.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:713-466-9407"
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold font-body text-sm hover:opacity-90 transition-all shadow-md"
                    >
                      <Phone className="w-4 h-4" /> Call for Pricing
                    </a>
                    <Link
                      to="/schedule-tour"
                      className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold font-body text-sm hover:opacity-90 transition-all shadow-md"
                    >
                      Schedule a Tour
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden h-72 md:h-80"
                >
                  <img src={familiesImg} alt="Families at Brentwood Children's Academy" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="py-16 md:py-20 bg-green-light">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Financial options"
              title="Tuition Options & Financial Aid"
              subtitle="We're committed to transparency. Here's everything you need to know about tuition and financial support at Brentwood."
            />
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {tuitionCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mb-5`}>
                    <card.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-5">{card.description}</p>
                  <ul className="space-y-2.5">
                    {card.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-foreground font-body text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CCMS detail */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                label="Government assistance"
                title="Do You Qualify for a Subsidy?"
                subtitle="Many families are eligible for childcare subsidies and don't know it. Our team can help you find out."
              />
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">CCMS — Child Care Management Services</h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-5">
                    CCMS is a Texas-funded program that helps eligible low-to-moderate income families pay for childcare while parents work, attend school, or participate in job training. Brentwood Children's Academy is a proud CCMS-approved provider.
                  </p>
                  <ul className="space-y-2">
                    {["Income-based eligibility", "Covers full or partial tuition", "Renewable with continued eligibility", "Our team assists with the application"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-foreground font-body text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">Workforce Solutions</h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-5">
                    Workforce Solutions provides childcare financial assistance for families who need support while working toward employment or education goals. We welcome Workforce Solutions recipients and will work directly with the program on your behalf.
                  </p>
                  <ul className="space-y-2">
                    {["Available for working and job-seeking parents", "Supports parents in training or education", "We coordinate directly with your caseworker", "Bilingual support available"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-foreground font-body text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <CTABlock
          title="Questions About Tuition?"
          subtitle="Our friendly team is ready to help you explore every option. Call or email us today for a personal conversation about pricing."
        />
      </main>
      <Footer />
    </div>
  );
};

export default Tuition;
