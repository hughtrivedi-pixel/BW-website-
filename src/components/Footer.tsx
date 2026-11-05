import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import brentwoodLogo from "@/assets/brentwood-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={brentwoodLogo} alt="" width={40} height={40} className="w-10 h-10 rounded-full flex-shrink-0" />
              <div className="leading-tight">
                <span className="font-display font-bold text-card text-lg block">Brentwood</span>
                <span className="text-card/60 text-xs font-body tracking-wide">Children's Academy</span>
              </div>
            </Link>
            <p className="font-body text-sm leading-relaxed text-card/60 mb-4">
              Nurturing young minds with love, laughter, and learning. TRS Highest Rank rated childcare in Houston, TX.
            </p>
            <div className="flex items-center gap-2 text-card/60 font-body text-xs">
              <span className="bg-accent/20 text-accent px-2 py-1 rounded-full font-semibold">⭐ TRS Highest Rank Rated</span>
              <Link to="/es" className="bg-primary/20 text-primary px-2 py-1 rounded-full font-semibold hover:bg-primary/30 transition-colors">Se Habla Español</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-card mb-5">Quick Links</h4>
            <div className="space-y-2.5 font-body text-sm">
              <Link to="/" className="block text-card/60 hover:text-primary transition-colors">Home</Link>
              <Link to="/difference" className="block text-card/60 hover:text-primary transition-colors">The Brentwood Difference</Link>
              <Link to="/programs" className="block text-card/60 hover:text-primary transition-colors">Programs Overview</Link>
              <Link to="/tuition" className="block text-card/60 hover:text-primary transition-colors">Tuition & Financial Aid</Link>
              <Link to="/about" className="block text-card/60 hover:text-primary transition-colors">About Us</Link>
              <Link to="/parent-resources" className="block text-card/60 hover:text-primary transition-colors">Parent Resources</Link>
              <Link to="/testimonials" className="block text-card/60 hover:text-primary transition-colors">Testimonials</Link>
              <Link to="/gallery" className="block text-card/60 hover:text-primary transition-colors">Photo Gallery</Link>
              <Link to="/contact" className="block text-card/60 hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-card mb-5">Our Programs</h4>
            <div className="space-y-2.5 font-body text-sm">
              <Link to="/programs/infant-toddler" className="block text-card/60 hover:text-primary transition-colors">Infant & Toddler (6 wks – 2 yrs)</Link>
              <Link to="/programs/preschool" className="block text-card/60 hover:text-primary transition-colors">Preschool (3 – 4 years)</Link>
              <Link to="/programs/pre-kindergarten" className="block text-card/60 hover:text-primary transition-colors">Pre-Kindergarten (4 – 5 years)</Link>
              <Link to="/programs/school-age" className="block text-card/60 hover:text-primary transition-colors">School Age / Varsity Club</Link>
              <Link to="/programs/summer-camp" className="block text-card/60 hover:text-primary transition-colors">Summer Camp</Link>
            </div>
            <div className="mt-6">
              <h4 className="font-display font-bold text-card mb-3 text-sm">Hours</h4>
              <div className="flex items-start gap-2 text-card/60 font-body text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Mon – Fri: 6:30 AM – 6:00 PM<br /><span className="text-card/40 text-xs">Closed Weekends & Major Holidays</span></span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-card mb-5">Get in Touch</h4>
            <div className="space-y-3 font-body text-sm">
              <a href="tel:713-466-9407" className="flex items-center gap-2 text-card/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" /> <span>713-466-9407</span>
              </a>
              <a href="mailto:info@brentwoodchildrensacademy.com" className="flex items-start gap-2 text-card/60 hover:text-primary transition-colors break-all">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>info@brentwoodchildrensacademy.com</span>
              </a>
              <div className="flex items-start gap-2 text-card/60">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-card/80 text-xs mb-0.5">Houston / Eldridge</p>
                  <a href="https://maps.google.com/?q=7210+N+Eldridge+Pkwy+Houston+TX+77041" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    7210 N. Eldridge Pkwy<br />Houston, TX 77041
                  </a>
                </div>
              </div>
            </div>
            <Link
              to="/schedule-tour"
              className="mt-5 inline-block bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-bold font-body hover:opacity-90 transition-opacity"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>

        <div className="border-t border-card/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-card/40">
          <span>© {new Date().getFullYear()} Brentwood Children's Academy. All rights reserved.</span>
          <span>Licensed by the Texas Department of Family & Protective Services</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
