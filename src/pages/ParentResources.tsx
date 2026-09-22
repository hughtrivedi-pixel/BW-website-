import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageSquare, FileText, HelpCircle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/difference-hero.jpg";
import Seo from "@/components/Seo";

const resources = [
  { icon: MessageSquare, title: "Parent Testimonials", description: "Real stories from families who trust Brentwood Children's Academy with their little ones.", color: "bg-primary/10 text-primary", link: "/testimonials" },
  { icon: FileText, title: "Enrollment Information", description: "Everything you need to know about enrolling your child, from documents to start dates.", color: "bg-accent/20 text-accent-foreground", link: "/contact" },
  { icon: HelpCircle, title: "FAQs", description: "Quick answers to the questions we hear most from parents every day.", color: "bg-coral/10 text-coral", link: "#faqs" },
];

const faqs = [
  { question: "What are your hours of operation?", answer: "Our Houston location is open Monday through Friday, 6:30 AM to 6:00 PM. We are closed on weekends and major holidays." },
  { question: "What ages do you accept?", answer: "We accept children from 6 weeks through 12 years of age. Programs include Infant & Toddler, Preschool, Pre-Kindergarten, School Age / Varsity Club, and Summer Camp." },
  { question: "Do you accept subsidies?", answer: "Yes! We accept CCMS (Child Care Management Services) and Workforce Solutions subsidies. Our team actively helps guide families through the application process." },
  { question: "What curriculum do you use?", answer: "We use the Frog Street research-based curriculum, which is aligned with Texas state standards and the Texas Rising Star framework. It covers literacy, math, science, social studies, and social-emotional development." },
  { question: "What is your TRS rating?", answer: "Brentwood Children's Academy holds a Texas Rising Star 4-Star rating — the highest achievable — and participates in the Center of Excellence (CoE) program, reflecting our sustained commitment to quality." },
  { question: "What is your teacher-to-child ratio?", answer: "We maintain ratios that meet or exceed Texas state requirements for every age group. Our small class sizes ensure every child receives personalized attention, care, and learning support." },
  { question: "Is there a waiting list?", answer: "Availability varies by age group. We recommend scheduling a tour and asking about current openings as early as possible. Early registration is especially encouraged for summer camp." },
  { question: "What should my child bring on the first day?", answer: "We provide a detailed checklist during enrollment. Typically you'll need a change of clothes, diapers/pull-ups if applicable, a comfort item, and completed enrollment forms. We'll walk you through everything." },
  { question: "Do you provide meals and snacks?", answer: "We provide nutritious snacks throughout the day. Families are welcome to pack lunches, and we accommodate allergies and dietary restrictions with advance notice." },
  { question: "Do you offer bilingual care?", answer: "Yes — Se Habla Español. We have bilingual staff to ensure Spanish-speaking families feel fully welcomed, informed, and at home." },
  { question: "How do you handle emergencies?", answer: "All staff are CPR and First Aid certified. We have comprehensive emergency action plans, conduct regular drills, and maintain immediate communication with parents during any incident." },
  { question: "Can I tour before enrolling?", answer: "Absolutely — and we strongly encourage it! Tours are free, no-pressure, and available Monday through Friday, after 9 AM by appointment. Walk-ins are welcome when scheduling allows." },
];

const ParentResources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Parent Resources in Houston, TX | Brentwood Children's Academy"} description={"Helpful resources for Houston families: daily schedules, what to bring, enrollment steps, parent communication tools and answers to common childcare questions."} path={"/parent-resources"} />
      <Navbar />
      <main>
        <PageHero badge="📚 Resources" title="Parent" highlight="Resources" subtitle="Helpful information, real testimonials, galleries, and answers to every question — everything you need as a Brentwood family." image={heroImg} />

        {/* Resource Cards */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader label="For families" title="Helpful Resources" subtitle="Quick access to the information and resources you need most as a Brentwood family." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {resources.map((resource, i) => (
                <motion.div key={resource.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link to={resource.link} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow text-center block group">
                    <div className={`w-14 h-14 rounded-xl ${resource.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <resource.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{resource.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Info */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader label="Getting started" title="Enrollment Information" subtitle="Enrolling at Brentwood is simple. Here's what to expect and what you'll need." />
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Step 1: Schedule a Tour", desc: "Visit our academy, meet our team, see the classrooms, and ask any questions you have. Tours are free and no-pressure." },
                { title: "Step 2: Complete Enrollment Forms", desc: "We'll provide all required paperwork including health records, emergency contacts, authorization forms, and program agreements." },
                { title: "Step 3: Discuss Tuition & Aid", desc: "Our team will walk you through pricing, subsidy options (CCMS, Workforce Solutions), and sibling discounts during your tour." },
                { title: "Step 4: Welcome to Brentwood!", desc: "Once enrolled, we'll share your child's start date, daily schedule, what to bring, and introduce you to their teacher." },
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold font-body">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 md:py-28 bg-green-light">
          <div className="container mx-auto px-4">
            <SectionHeader label="Common questions" title="Frequently Asked Questions" subtitle="Honest, detailed answers to the questions parents ask us most." />
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-md transition-shadow">
                    <AccordionTrigger className="font-body font-bold text-foreground text-left hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <CTABlock title="Ready to Get Started?" subtitle="Schedule a tour, call us, or send a message — we're here to make this easy for your family." />
      </main>
      <Footer />
    </div>
  );
};

export default ParentResources;
