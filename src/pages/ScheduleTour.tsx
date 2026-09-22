import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, CheckCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

import familiesImg from "@/assets/families-dropoff.jpg";
import classroomImg from "@/assets/preschool-classroom.jpg";
import differenceHero from "@/assets/difference-hero.jpg";
import Seo from "@/components/Seo";

const ScheduleTour = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Schedule a Childcare Tour in Houston, TX | Brentwood Children's Academy"} description={"Book a free, no-pressure tour of our Houston, TX childcare center. Visit classrooms, meet teachers and see our programs Monday through Friday after 9:30 AM."} path={"/schedule-tour"} />
      <Navbar />
      <main>
        <PageHero
          badge="📅 Visit Us"
          title="Schedule a"
          highlight="Tour"
          subtitle="Come see our classrooms, meet our teachers, and experience firsthand why families across Houston love Brentwood."
          image={differenceHero}
        />

        {/* Trust bar */}
        <section className="py-10 bg-green-light border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {[
                { icon: Star, label: "TRS Highest Rank Rated", sub: "Texas's Highest Rating" },
                { icon: CheckCircle, label: "No Pressure Tours", sub: "We're here to answer questions" },
                { icon: Phone, label: "713-466-9407", sub: "Call anytime Mon–Fri", href: "tel:713-466-9407" },
                { icon: MapPin, label: "Convenient Location", sub: "Houston / Eldridge Pkwy" },
              ].map((item) => {
                const Wrapper: any = item.href ? "a" : "div";
                const wrapperProps = item.href ? { href: item.href } : {};
                return (
                  <Wrapper
                    key={item.label}
                    {...wrapperProps}
                    className={`flex items-center gap-3 ${item.href ? "hover:opacity-80 transition-opacity" : ""}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="font-body font-bold text-foreground text-sm">{item.label}</p>
                      <p className="font-body text-muted-foreground text-xs">{item.sub}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
              {/* Left - Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
              >
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                  Request a Tour
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                  Fill out the form below and our team will contact you within one business day to confirm your visit. Tours are free, friendly, and absolutely no-pressure.
                </p>
                <iframe
                  src="https://live.childcarecrm.com/forms/tour-booking/chooser?customerId=25a21cec8b8c9cd514198dbba85508ec&formId=b42a0ab3-0e2f-443b-ba55-bed7e2c55200"
                  title="Brentwood Children's Academy Tour Booking"
                  width="100%"
                  className="h-[600px] md:h-[900px]"
                  style={{ border: "none" }}
                  scrolling="yes"
                />
              </motion.div>

              {/* Right - Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                className="space-y-6"
              >
                <div className="rounded-2xl overflow-hidden h-52">
                  <img src={classroomImg} alt="Brentwood Children's Academy classroom" className="w-full h-full object-cover" />
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">Prefer to Call?</h3>
                  <a href="tel:713-466-9407" className="flex items-center gap-3 text-foreground font-body text-lg hover:text-primary transition-colors">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold block">713-466-9407</span>
                      <span className="text-muted-foreground text-sm">Mon–Fri, 6:30 AM – 6:00 PM</span>
                    </div>
                  </a>
                  <div className="mt-3 border-t border-border pt-3">
                    <a href="mailto:info@brentwoodchildrensacademy.com" className="flex items-center gap-3 text-foreground font-body hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold">info@brentwoodchildrensacademy.com</span>
                    </a>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">What to Expect on Your Tour</h3>
                  <div className="space-y-3">
                    {[
                      "A warm, no-pressure welcome from our management team",
                      "Walk through age-appropriate classrooms and outdoor play areas",
                      "Learn about our Frog Street curriculum and daily routines",
                      "Discuss tuition, financial aid, and available enrollment spots",
                      "Meet our teachers and see our caring team in action",
                      "Ask any and all questions — we love to share our story",
                      "Receive a take-home enrollment packet with full program details",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-foreground font-body text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Tour Hours</h3>
                  <div className="flex items-center gap-3 text-muted-foreground font-body mb-2">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Monday – Friday, after 9:30 AM</span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    Tours are available by appointment. Walk-ins are welcome when our schedule allows — call ahead for the best experience.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <img src={familiesImg} alt="Families at Brentwood Children's Academy" className="w-full h-64 object-cover rounded-2xl mb-10" />
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                You'll Feel It the Moment You Walk In
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
                Every family who tours Brentwood Children's Academy tells us the same thing — they felt welcomed, reassured, and excited about their child's future here. Come see for yourself. We can't wait to meet your family.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ScheduleTour;
