import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Star, Sun, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Espanol = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title={"Guarderia y Preescolar en Houston, TX | Brentwood Children's Academy"} description={"Cuidado infantil y preescolar en Houston, TX con personal bilingue. Programas para bebes, ninos pequenos, preescolar, pre-kinder y campamento de verano."} path={"/es"} />
      {/* Simple top bar */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">B</span>
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-foreground text-lg block">Brentwood</span>
              <span className="text-muted-foreground text-xs font-body">Children's Academy</span>
            </div>
          </Link>
          <Link
            to="/"
            className="font-body text-sm text-primary hover:underline"
          >
            English →
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <span className="inline-block bg-primary/10 text-primary font-body font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              🇪🇸 Bienvenidos
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-5">
              Brentwood Children's Academy
            </h1>
            <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed mb-8">
              Cuidado infantil con cariño, aprendizaje y diversión en Houston, TX. Calificación TRS de 4 estrellas. <strong>¡Sí, hablamos español!</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:713-466-9407"
                className="bg-primary text-primary-foreground px-7 py-4 rounded-full font-bold font-body text-base hover:opacity-90 transition-all shadow-md inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Llámenos: 713-466-9407
              </a>
              <Link
                to="/schedule-tour"
                className="bg-secondary text-secondary-foreground px-7 py-4 rounded-full font-bold font-body text-base hover:opacity-90 transition-all shadow-md"
              >
                Programe una Visita
              </Link>
            </div>
          </div>
        </section>

        {/* Programs summary */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Nuestros Programas</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2">
                Programas para Cada Edad
              </h2>
              <p className="text-muted-foreground font-body mt-3">
                Desde bebés hasta niños en edad escolar — un programa adecuado para cada etapa.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Bebés y Caminadores", ages: "6 semanas – 2 años", desc: "Ambiente cálido y seguro con cuidadores cariñosos y rutinas suaves." },
                { title: "Preescolar", ages: "3 – 4 años", desc: "Currículo Frog Street basado en juego: lectura, matemáticas y arte." },
                { title: "Pre-Kínder", ages: "4 – 5 años", desc: "Preparación completa para el kínder: lectura, escritura y matemáticas." },
                { title: "Edad Escolar / Varsity Club", ages: "5 – 12 años", desc: "Cuidado antes y después de la escuela con ayuda con la tarea y actividades enriquecedoras." },
                { title: "Campamento de Verano", ages: "Todas las edades (0 a 12 años)", desc: "Aventuras semanales con temas, excursiones, juegos de agua y proyectos creativos." },
                { title: "Acreditaciones", ages: "TRS 4 Estrellas", desc: "La calificación más alta del estado por calidad de cuidado infantil en Texas." },
              ].map((p) => (
                <div key={p.title} className="bg-card rounded-2xl p-6 shadow-md border border-border">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold font-body px-3 py-1 rounded-full mb-3">
                    {p.ages}
                  </span>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summer Camp Highlight */}
        <section className="py-16 md:py-20 bg-accent/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <Sun className="w-12 h-12 text-accent mx-auto mb-3" />
              <span className="text-accent font-body font-bold text-sm uppercase tracking-widest">Campamento de Verano</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2">
                ¡Un Verano Lleno de Aventuras!
              </h2>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-md">
              <p className="text-foreground font-body text-base md:text-lg leading-relaxed mb-5">
                Nuestro Campamento de Verano es lo más destacado del año para las familias de Brentwood. Cada semana presenta una aventura temática única con excursiones, proyectos STEAM prácticos, juegos de agua, artes creativas y exploración al aire libre.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                El campamento está disponible para todas las edades (0 a 12 años) y se ofrece durante todo el verano con horarios flexibles. Se recomienda inscribirse temprano ya que los lugares se llenan rápido. Pregunte por nuestros descuentos para hermanos y precios especiales para familias que regresan.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Excursiones semanales a museos y parques",
                  "Juegos de agua y actividades al aire libre",
                  "Desafíos STEAM y artes creativas",
                  "Espectáculos de talento y artes escénicas",
                  "Personal certificado en RCP y primeros auxilios",
                  "Meriendas conscientes de alergias",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground font-body text-sm">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:713-466-9407"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold font-body text-sm hover:opacity-90 transition-all shadow-md inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Inscríbase Hoy: 713-466-9407
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <span className="text-primary font-body font-bold text-sm uppercase tracking-widest">Contáctenos</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2">
                Estamos Aquí para Ayudar
              </h2>
              <p className="text-muted-foreground font-body mt-3">
                Hable con nuestro personal en español. Con gusto le responderemos sus preguntas.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <a href="tel:713-466-9407" className="bg-card rounded-2xl p-6 shadow-md border border-border flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">Teléfono</p>
                  <p className="text-muted-foreground font-body text-sm">713-466-9407</p>
                  <p className="text-primary font-body text-xs mt-1">Toque para llamar</p>
                </div>
              </a>
              <a href="mailto:info@brentwoodca.com" className="bg-card rounded-2xl p-6 shadow-md border border-border flex items-start gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">Correo Electrónico</p>
                  <p className="text-muted-foreground font-body text-sm">info@brentwoodca.com</p>
                </div>
              </a>
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">Dirección</p>
                  <p className="text-muted-foreground font-body text-sm">Houston, TX</p>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-md border border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">Horario</p>
                  <p className="text-muted-foreground font-body text-sm">Lunes a Viernes</p>
                  <p className="text-muted-foreground font-body text-sm">6:30 AM – 6:30 PM</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="tel:713-466-9407"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold font-body text-base hover:opacity-90 transition-all shadow-md inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" /> Llame Ahora en Español
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Espanol;
