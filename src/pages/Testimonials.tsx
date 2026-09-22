import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";
import heroImg from "@/assets/difference-hero.jpg";
import familiesImg from "@/assets/families-dropoff.jpg";
import Seo from "@/components/Seo";

const testimonials = [
  { name: "Maria G.", program: "Preschool Parent", stars: 5, text: "Brentwood has been an absolute blessing for our family. Our daughter has thrived in the Preschool program and comes home every day excited to tell us what she learned. The teachers genuinely love these kids, and it shows." },
  { name: "James & Lisa T.", program: "Infant Program Parents", stars: 5, text: "Leaving our newborn was terrifying — until we found Brentwood. The infant room teachers are so warm and attentive. The daily reports, the smiles at drop-off, the communication — everything gives us total peace of mind. We feel so lucky." },
  { name: "Sarah M.", program: "Pre-K Parent", stars: 5, text: "We've tried other daycares before, but nothing compares to Brentwood. The curriculum is excellent, the communication is outstanding, and the staff truly cares about every child. We are Brentwood for life!" },
  { name: "Carlos & Ana R.", program: "Toddler & Pre-K Parents", stars: 5, text: "As a bilingual family, it meant the world to us that Brentwood truly Se Habla Español. Our children feel at home, our teachers communicate with us easily, and both of our kids are flourishing. We couldn't be more grateful." },
  { name: "Jennifer K.", program: "School Age / Varsity Club", stars: 5, text: "The Varsity Club is incredible. My son actually looks forward to going after school — that says everything. The homework help is structured, the activities are engaging, and I never worry about where he is. Best decision we made." },
  { name: "David & Priya M.", program: "Summer Camp Parents", stars: 5, text: "Summer camp at Brentwood was the highlight of our daughter's summer. The themed weeks, field trips, and water play kept her so engaged. She made new friends and came home talking about her day every single night. Already signed up for next year!" },
  { name: "Tamara B.", program: "Preschool Parent", stars: 5, text: "I was hesitant about childcare in general, but Brentwood changed everything. The safety measures, the loving teachers, and the curriculum — all of it exceeded my expectations. My daughter is blossoming and I truly credit Brentwood for so much of that." },
  { name: "Marcus & Keisha W.", program: "Infant & Pre-K Parents", stars: 5, text: "We've had two children at Brentwood and both experiences have been exceptional. The consistency of the staff, the strong leadership from the owners, and the genuinely loving environment make this place unlike any other childcare center we've seen." },
  { name: "Elena V.", program: "Pre-Kindergarten Parent", stars: 5, text: "My son started Pre-K at Brentwood barely knowing his letters. By the end of the year he was reading simple books, writing his name, and counting confidently. His kindergarten teacher was amazed at how prepared he was. Thank you, Brentwood!" },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Parent Reviews of Our Houston Academy | Brentwood Children's Academy"} description={"Read reviews from Houston families about our infant, preschool, pre-K, school age and summer camp programs and the teachers who care for their children."} path={"/testimonials"} />
      <Navbar />
      <main>
        <PageHero badge="⭐ Testimonials" title="What Families" highlight="Are Saying" subtitle="Don't take our word for it — hear from the parents and families who trust Brentwood Children's Academy every single day." image={heroImg} />

        {/* Overall rating */}
        <section className="py-16 bg-green-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl mb-3">⭐⭐⭐⭐⭐</div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">5-Star Rated by Our Families</h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Hundreds of Houston trusted Brentwood Children's Academy with their most precious ones. Here are some of their stories.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader label="Parent reviews" title="Real Stories From Real Families" subtitle="Every word below comes directly from families enrolled at Brentwood Children's Academy." />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} className="text-accent text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-foreground font-body leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div>
                    <p className="text-primary font-body font-bold text-sm">— {t.name}</p>
                    <p className="text-muted-foreground font-body text-xs mt-0.5">{t.program}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo + CTA */}
        <section className="py-16 bg-green-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden h-64 mb-10">
                <img src={familiesImg} alt="Happy families at Brentwood Children's Academy" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                  Your Family's Story Starts Here
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                  Join the Brentwood family and discover for yourself why parents across Houston trust us with their children's earliest, most important years.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/schedule-tour" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg">
                    Schedule a Tour
                  </Link>
                  <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-md">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABlock />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
