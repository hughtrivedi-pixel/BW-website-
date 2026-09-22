import { motion } from "framer-motion";
import { Heart, Award, Users, BookOpen, Handshake, Clock, CheckCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABlock from "@/components/CTABlock";
import SectionHeader from "@/components/SectionHeader";
import leadershipImg from "@/assets/leadership-trivedi.png";
import staffImg from "@/assets/ccp-certification.png";
import familiesImg from "@/assets/about-mission-basketball.jpg";
import heroImg from "@/assets/difference-hero.jpg";
import Seo from "@/components/Seo";

const values = [
  { icon: Heart, title: "Love & Nurturing", description: "Every child is treated with patience, warmth, and genuine love as a cherished member of our extended family — because they are." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards in early childhood education, curriculum quality, and staff development. TRS Highest Rank is our floor, not our ceiling." },
  { icon: Users, title: "Community", description: "We build strong, lasting partnerships with families and actively support the Houston community we call home." },
  { icon: BookOpen, title: "Growth", description: "We foster continuous learning — for children, for families, and for every member of our dedicated teaching team." },
  { icon: Handshake, title: "Integrity", description: "Transparency, honesty, and trust guide every interaction we have with families, staff, and partners. We say what we mean and mean what we say." },
  { icon: Clock, title: "Consistency", description: "Reliable routines, familiar caregivers, and dependable schedules give children the stability they need — and parents the peace of mind they deserve." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"About Our Houston Childcare Center | Brentwood Children's Academy"} description={"Meet the family behind Brentwood Children's Academy in Houston, TX: our mission, experienced leadership, certified teachers and our commitment to children."} path={"/about"} />
      <Navbar />
      <main>
        <PageHero
          badge="🏫 About Us"
          title="Our Story &"
          highlight="Mission"
          subtitle="Nurturing young minds with love, laughter, and learning — and the privilege of being part of your family's story."
          image={heroImg}
        />

        {/* Mission */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Our Mission</span>
                  <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3 mb-6">
                    Why We Do What We Do
                  </h2>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed mb-5">
                    At Brentwood Children's Academy, our mission is to provide a safe, nurturing, and stimulating environment where every child can grow, learn, and thrive. We believe that the early years are the most formative of a child's life — and we are deeply honored to be trusted with that time.
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed mb-5">
                    Founded on the belief that every child deserves an exceptional start, we combine expert knowledge in early childhood education with a genuine, heartfelt love for children. Our TRS Highest Rank rated centers in Houston and in Houston serv in Houston serv in Houston serv in Houston servesgh 12 years.
                  </p>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    We don't just watch children — we invest in them. We celebrate their milestones, encourage their curiosity, and partner with parents to ensure every child reaches their fullest potential.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden h-80 md:h-96"
                >
                  <img src={familiesImg} alt="Indoor basketball arcade game in Brentwood Children's Academy activity room" className="w-full h-full object-cover object-center" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership - Real people */}
        <section className="py-20 md:py-28 bg-green-light">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Our leadership"
              title="Meet the Owners"
              subtitle="Brentwood Children's Academy is proudly family-owned and operated by Hugh and Nidhi Trivedi — hands-on leaders who are invested in every child's journey."
            />

            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-8 mb-8"
              >
                {/* Owners */}
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-md lg:col-span-1">
                  <div className="h-64 overflow-hidden">
                    <img src={leadershipImg} alt="Hugh and Nidhi Trivedi, Owners of Brentwood Children's Academy" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-foreground">Hugh & Nidhi Trivedi</h3>
                        <p className="text-primary font-body text-sm font-semibold">Owners, Brentwood Children's Academy</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed mb-4">
                      Hugh (Himanshu) and Nidhi Trivedi bring a rare combination of educational passion and business excellence to Brentwood Children's Academy. With backgrounds spanning education, management, and operations, they built this academy with a singular vision: to create a place where children genuinely love to come every day.
                    </p>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      As hands-on owners, Hugh and Nidhi are regularly present at the Houston location, ensuring the values they built this academy on — safety, love, and excellence — are felt in every classroom, every day.felt in every classroom, every day.                </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Education Degrees", "Hands-on Leadership", "Se Habla Español"].map((tag) => (
                        <span key={tag} className="bg-primary/10 text-primary font-body text-xs font-semibold px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Director */}
                <div className="bg-card rounded-2xl border border-border shadow-md overflow-hidden">
                  <div className="h-64 overflow-hidden bg-white flex items-center justify-center p-6">
                    <img src={staffImg} alt="NECPA Certified Childcare Professional (CCP) credential" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-foreground">Our Management Team</h3>
                        <p className="text-secondary font-body text-sm font-semibold">Director & Teaching Staff</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed mb-4">
                      Our center director brings over 20 years of childcare leadership experience to Brentwood — overseeing curriculum implementation, staff development, family relations, and daily operations across our locations.
                    </p>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      Supported by a team of dedicated, background-checked educators — many of whom hold degrees in Early Childhood Education — our staff receives ongoing professional development and training to ensure Brentwood remains a leader in quality childcare.
                    </p>
                    <div className="mt-5 space-y-2">
                      {[
                        "20+ years childcare leadership experience",
                        "Staff holds ECE degrees and certifications",
                        "Low turnover — familiar faces your child loves",
                        "All staff CPR & First Aid certified",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-foreground font-body text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader label="What we stand for" title="Our Core Values" subtitle="The principles that guide every decision, every interaction, and every moment at Brentwood Children's Academy." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRS Highlight */}
        <section className="py-20 md:py-28 bg-green-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-10 border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 text-accent-foreground flex items-center justify-center mx-auto mb-5">
                  <Star className="w-8 h-8" />
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                  Texas Rising Star Highest Rank Rated
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                  Brentwood Children's Academy consistently holds a Texas Rising Star Highest Rank rating — the highest level achievable — and proudly participates in the Center of Excellence (CoE) program. These distinctions reflect our unwavering commitment to curriculum quality, staff excellence, family engagement, and safe, supportive environments.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 text-left">
                  {[
                    { label: "Staff Qualifications", desc: "All teachers meet or exceed TRS educational requirements" },
                    { label: "Curriculum Quality", desc: "Frog Street research-based program aligned with TRS standards" },
                    { label: "Family Engagement", desc: "Regular communication, events, and open-door policies" },
                  ].map((item) => (
                    <div key={item.label} className="bg-muted/50 rounded-xl p-4">
                      <p className="font-body font-bold text-foreground text-sm mb-1">{item.label}</p>
                      <p className="font-body text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-20 md:py-28 bg-cream-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeader label="Community involvement" title="Part of Your Community" />
              <p className="text-muted-foreground font-body text-lg leading-relaxed -mt-8 mb-6">
                Brentwood Children's Academy is proud to be . We collaborate with local organizations, participate in communityith local organizations, participat events, and welcome families from every background. Our Se Habla Español commitment ensures every bilingual family feels genuinely welcome, heard, and at home.
              </p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                We also accept CCMS and Workforce Solutions subsidies because we believe financial constraints should never stand between a child and exceptional early education. Every child deserves Brentwood.
              </p>
            </div>
          </div>
        </section>

        <CTABlock title="Join the Brentwood Family" subtitle="Schedule a visit and see firsthand what makes our academy — and our community — so special." />
      </main>
      <Footer />
    </div>
  );
};

export default About;
