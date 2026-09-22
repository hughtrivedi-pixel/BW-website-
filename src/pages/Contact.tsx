import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import familiesImg from "@/assets/preschool-classroom.jpg";
import exteriorImg from "@/assets/center-exterior.jpg";
import differenceHero from "@/assets/difference-hero.jpg";
import Seo from "@/components/Seo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Contact Our Houston Childcare Center | Brentwood Children's Academy"} description={"Contact Brentwood Children's Academy in Houston, TX. Call 713-466-9407, send us a message, or stop by our Eldridge Parkway center to ask about enrollment."} path={"/contact"} />
      <Navbar />
      <main>
        <PageHero
          badge="📞 Contact Us"
          title="Get in"
          highlight="Touch"
          subtitle="We'd love to hear from you. Reach out with enrollment questions, tour requests, or anything at all — we're always happy to help."
          image={differenceHero}
        />

        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground font-body mb-8">
                  Fill out the form below and a member of our friendly team will respond within one business day. We welcome questions in English and Spanish.
                </p>
                <iframe
                  src="https://live.childcarecrm.com/portal/index.php?formId=25a21cec8b8c9cd514198dbba85508ec&webForm=077413ea-2900-4543-be24-151ca3a179a7"
                  title="Brentwood Children's Academy Inquiry Form"
                  width="100%"
                  className="h-[600px] md:h-[900px]"
                  style={{ border: "none" }}
                  scrolling="yes"
                />
              </motion.div>

              {/* Contact info + locations */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="rounded-2xl overflow-hidden h-52">
                  <img src={familiesImg} alt="Brentwood Children's Academy classroom" className="w-full h-full object-cover object-center" loading="lazy" />
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:713-466-9407" className="flex items-center gap-3 text-foreground font-body hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-bold block">713-466-9407</span>
                        <span className="text-muted-foreground text-xs">Mon–Fri, 6:30 AM – 6:00 PM</span>
                      </div>
                    </a>
                    <a href="mailto:info@brentwoodchildrensacademy.com" className="flex items-center gap-3 text-foreground font-body hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-sm break-all">info@brentwoodchildrensacademy.com</span>
                    </a>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4">Business Hours</h3>
                  <div className="space-y-2 font-body">
                    <div className="flex justify-between text-foreground text-sm">
                      <span>Monday – Friday</span>
                      <span className="font-semibold">6:30 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground text-sm">
                      <span>Saturday – Sunday</span>
                      <span>Closed</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground text-sm">
                      <span>Major Holidays</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-muted-foreground font-body text-xs">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Tour hours: Mon–Fri, after 9:00 AM (by appointment)</span>
                  </div>
                </div>

                <div className="relative bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">Houston / Eldridge Location</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-muted-foreground font-body text-sm">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <a href="https://maps.google.com/?q=7210+N+Eldridge+Pkwy+Houston+TX+77041" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold text-foreground">
                          7210 N. Eldridge Pkwy, Houston, TX 77041
                        </a>
                        <p className="text-xs mt-1">Located off N. Eldridge Pkwy near Hwy 6, easily accessible from Northwest Houston and Katy area.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="tel:713-466-9407" className="hover:text-primary transition-colors">713-466-9407</a>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Mon–Fri: 6:30 AM – 6:00 PM</span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=7210+N+Eldridge+Pkwy+Houston+TX+77041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-primary/10 text-primary font-bold font-body text-sm px-5 py-2.5 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden h-64 md:h-80 mb-10">
                <img src={exteriorImg} alt="Brentwood Children's Academy building exterior" className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                  We'd Love to Meet Your Family
                </h2>
                <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
                  Whether you have a quick question, need information on enrollment, or are ready to schedule a tour — we're here for you. Don't hesitate to reach out in whatever way is most convenient.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
