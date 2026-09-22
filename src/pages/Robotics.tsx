import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bot,
  Cpu,
  Sparkles,
  MonitorOff,
  Baby,
  Wrench,
  Palette,
  Code2,
  PlayCircle,
  Brain,
  Calculator,
  Users,
  Cog,
  Microscope,
  Heart,
  Star,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import kiboBlocksImg from "@/assets/robotics-kibo-blocks.jpg";
import handsBuildingImg from "@/assets/robotics-gearbot-table.jpg";
import steamRoomImg from "@/assets/robotics-steam-room.jpg";
import microscopeImg from "@/assets/robotics-microscope.jpg";
import digitalLearningImg from "@/assets/robotics-welcome-steam.jpg";
import creativeBuildImg from "@/assets/robotics-anatomy-station.jpg";
import Seo from "@/components/Seo";

const galleryImages = [
  { src: kiboBlocksImg, alt: "KIBO wooden robot and coding blocks", caption: "KIBO in action" },
  { src: handsBuildingImg, alt: "STEAM exploration table with Gear-Bot kit, animal track specimens, magnifying glass, and wildlife cards", caption: "Discovery table" },
  { src: steamRoomImg, alt: "Brentwood dedicated STEAM room", caption: "Our STEAM room" },
  { src: microscopeImg, alt: "Child exploring with a biological microscope", caption: "Real science tools" },
  { src: digitalLearningImg, alt: "Colorful 'Welcome to STEAM' chalkboard mural with gears, robot, butterfly, and science doodles", caption: "Welcome to STEAM" },
  { src: creativeBuildImg, alt: "Hands-on anatomy learning station with human torso model, science books, and dental kit", caption: "Hands-on science" },
];

const heroBadges = [
  { icon: Bot, label: "KIBO Robotics", bg: "bg-primary", fg: "text-primary-foreground" },
  { icon: Cpu, label: "Dedicated STEAM Room", bg: "bg-secondary", fg: "text-secondary-foreground" },
  { icon: Sparkles, label: "HATCH Digital Learning", bg: "bg-accent", fg: "text-accent-foreground" },
  { icon: MonitorOff, label: "Screen-Free Coding", bg: "bg-coral", fg: "text-secondary-foreground" },
  { icon: Baby, label: "Ages 2 & Up", bg: "bg-green-dark", fg: "text-primary-foreground" },
];

const kiboSteps = [
  { n: 1, icon: Wrench, title: "Build", desc: "Assemble and customize the robot from real, tactile pieces." },
  { n: 2, icon: Palette, title: "Decorate & Imagine", desc: "Turn KIBO into a character, animal, or anything they dream up." },
  { n: 3, icon: Code2, title: "Code with Wooden Blocks", desc: "Sequence wooden programming blocks — no screens or typing." },
  { n: 4, icon: PlayCircle, title: "Test, Play & Improve", desc: "Run the program, debug, and try again — engineering in action." },
];

const skills = [
  { emoji: "🧠", title: "Critical Thinking", desc: "Make decisions, test ideas, and adjust when something doesn't work." },
  { emoji: "🔢", title: "Computational Thinking", desc: "Sequencing, cause & effect, loops, and conditionals." },
  { emoji: "🎨", title: "Creative Expression", desc: "KIBO becomes whatever a child can imagine." },
  { emoji: "🤝", title: "Collaboration & Communication", desc: "Plan, build, and solve problems together." },
  { emoji: "⚙️", title: "Engineering Mindset", desc: "The build-test-improve cycle builds grit and perseverance." },
  { emoji: "🔬", title: "Scientific Curiosity", desc: "Sparks questions about how things work in the world." },
];

const ageGroups = [
  { age: "Ages 2–3", title: "Little Builders", desc: "Sensory play, simple sequences, and early logical thinking." },
  { age: "Ages 3–5", title: "Junior Coders", desc: "First programs, decorating robots, and exploring imagination through coding." },
  { age: "Ages 5–8", title: "Young Engineers", desc: "More complex programs, teamwork, and connections to literacy, math, and science." },
  { age: "Ages 8 & Up", title: "Advanced Innovators", desc: "Loops, conditionals, sensors, and independent design challenges." },
];

const steamRoom = [
  { emoji: "🔬", icon: Microscope, title: "Biological Microscope", desc: "Children observe the microscopic world up close — science becomes real and visible." },
  { emoji: "🫀", icon: Heart, title: "Human Body Anatomy Diagrams", desc: "Detailed, age-appropriate diagrams of human body systems line the walls." },
  { emoji: "🤖", icon: Bot, title: "KIBO Robotics Station", desc: "A dedicated space for our weekly KIBO coding sessions." },
];

const hatchProducts = [
  { title: "Ignite by Hatch™", desc: "A personalized, game-based learning app tuned to each child." },
  { title: "Hatch Insights™", desc: "Real-time progress data for teachers and families." },
  { title: "IgnitePanel™", desc: "Whole-class instruction with 1,600+ interactive activities." },
  { title: "IgniteTable™", desc: "A collaborative learning table designed for 2–4 children." },
];

const subjects = [
  "📖 Literacy & Storytelling",
  "🔢 Math & Geometry",
  "🔬 Life Science & Biology",
  "🌎 Geography & Social Studies",
  "🎨 Art & Creative Expression",
  "🎵 Music & Movement",
  "⚙️ Engineering Design",
  "💻 Computer Science Foundations",
  "🫀 Human Body & Health",
];

const Robotics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Robotics & STEAM Classes in Houston, TX | Brentwood Children's Academy"} description={"Hands-on robotics and STEAM learning in Houston, TX. Children build, code and explore with KIBO robots, science stations and creative discovery projects."} path={"/robotics-steam"} />
      <Navbar />
      <main>
        {/* 1. HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-cream via-background to-sky pt-12 pb-24 md:pt-16 md:pb-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-secondary/25 blur-3xl" />
            <div className="absolute bottom-10 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-bold text-sm px-4 py-1.5 rounded-full shadow-md">
                <Star className="h-4 w-4 fill-current" /> Weekly Robotics Classes · Ages 2 & Up
              </span>
            </motion.div>

            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-foreground"
              >
                Robotics & <span className="text-secondary">STEAM</span> at Brentwood
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto"
              >
                We believe every child — even our youngest learners — deserves the chance to think
                like an engineer, explore like a scientist, and create like an artist. Welcome to
                our Robotics & STEAM program.
              </motion.p>

              <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {heroBadges.map((b, i) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className={`flex items-center gap-2 ${b.bg} ${b.fg} rounded-2xl pl-2 pr-4 py-2 shadow-lg border-2 border-card/40`}
                  >
                    <span className="flex items-center justify-center h-9 w-9 rounded-xl bg-card/90 text-foreground shrink-0 shadow-inner">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <span className="font-body font-bold text-xs sm:text-sm leading-tight">
                      {b.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. AGE BANNER */}
        <section className="bg-[image:var(--gradient-hero)] py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="font-body font-bold text-primary-foreground text-base md:text-lg">
              🤖 Weekly Robotics & Coding Classes for Every Child, Ages 2 & Up — because it's never
              too early to start building, thinking, and creating.
            </p>
          </div>
        </section>

        {/* 3. GALLERY */}
        <section className="py-20 md:py-24 bg-cream">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="See It For Yourself"
              title="Inside Our Robotics & STEAM Program"
              subtitle="A peek at the tools, materials, and spaces that make STEAM come alive at Brentwood every day."
              labelColor="text-secondary"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-[180px] md:auto-rows-[220px]">
              {galleryImages.map((img, i) => {
                const spans = [
                  "col-span-2 row-span-2",
                  "col-span-2 row-span-1",
                  "col-span-1 row-span-1",
                  "col-span-1 row-span-1",
                  "col-span-2 row-span-1",
                  "col-span-2 row-span-1",
                ];
                return (
                  <motion.figure
                    key={img.src}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className={`${spans[i]} relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all group border border-border`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent text-card font-body font-semibold text-sm px-4 py-3">
                      {img.caption}
                    </figcaption>
                  </motion.figure>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. KIBO MAIN FEATURE */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Our Star Program"
              title="KIBO Robotics — The Heart of Our STEAM Curriculum"
              subtitle="KIBO is a hands-on, screen-free robotics kit for children ages 2 and up. Children code using physical wooden blocks — no tablets, no screens. Backed by 20+ years of early childhood research and used in 70+ countries. At Brentwood, it's a weekly part of every child's experience."
              labelColor="text-secondary"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {kiboSteps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-border relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-secondary text-secondary-foreground font-display font-bold text-xl flex items-center justify-center shadow-lg">
                    {s.n}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 mt-2">
                    <s.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SKILLS GRID */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="What Children Gain"
              title="Skills That Last a Lifetime"
              subtitle="Every KIBO session builds skills that reach far beyond robotics."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {skills.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-border"
                >
                  <div className="text-4xl mb-3">{s.emoji}</div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WEEKLY CLASSES BY AGE */}
        <section className="py-20 md:py-28 bg-[image:var(--gradient-hero)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent animate-float" />
            <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-secondary animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="text-accent font-body font-bold text-sm uppercase tracking-widest">
                Weekly Curriculum
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mt-3">
                Weekly Robotics Classes for Ages 2 & Up
              </h2>
              <p className="text-primary-foreground/80 font-body text-lg mt-4">
                At Brentwood, robotics is a core part of our weekly curriculum — every child gets
                dedicated robotics time each week.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {ageGroups.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all border border-border"
                >
                  <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold font-body px-3 py-1 rounded-full mb-3">
                    {g.age}
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{g.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{g.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Link
                to="/schedule-tour"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Schedule a Tour to See It in Action
              </Link>
            </div>
          </div>
        </section>

        {/* 6. STEAM ROOM */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Our Facility"
              title="A Dedicated STEAM Room Built for Discovery"
              subtitle="Brentwood has a dedicated STEAM room designed to make science, technology, engineering, art, and math tangible for young learners every day."
              labelColor="text-secondary"
            />

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {steamRoom.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-border text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/20 text-accent-foreground flex items-center justify-center mb-4 text-3xl">
                    {f.emoji}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. HATCH */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Digital Learning"
              title="HATCH Early Learning — The Digital Complement"
              subtitle="Alongside KIBO's screen-free approach, Brentwood uses HATCH Early Learning — a research-backed digital curriculum platform with personalized, game-based learning across math, literacy, and whole-child development. Together, KIBO and HATCH give every child a complete STEAM experience."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {hatchProducts.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CROSS-CURRICULAR */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Whole-Child Learning"
              title="STEAM Connects to Everything We Teach"
            />

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {subjects.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="bg-card border-2 border-border text-foreground font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* 9. CTA (orange) */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-secondary">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-card animate-float" />
            <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-accent animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mb-6">
                Come See Our STEAM Room in Action
              </h2>
              <p className="text-secondary-foreground/90 font-body text-lg mb-10 max-w-xl mx-auto">
                Schedule a tour and watch your child's eyes light up when they see KIBO, our STEAM
                room, and everything Brentwood has to offer.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/schedule-tour"
                  className="bg-card text-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Schedule a Tour
                </Link>
                <Link
                  to="/contact"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Robotics;
