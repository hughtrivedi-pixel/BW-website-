import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Difference from "./pages/Difference";
import Tuition from "./pages/Tuition";
import ScheduleTour from "./pages/ScheduleTour";
import About from "./pages/About";
import ParentResources from "./pages/ParentResources";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import Espanol from "./pages/Espanol";
import Robotics from "./pages/Robotics";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

export const AppRoutes = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:slug" element={<ProgramDetail />} />
        <Route path="/difference" element={<Difference />} />
        <Route path="/tuition" element={<Tuition />} />
        <Route path="/schedule-tour" element={<ScheduleTour />} />
        <Route path="/about" element={<About />} />
        <Route path="/parent-resources" element={<ParentResources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/es" element={<Espanol />} />
        <Route path="/robotics-steam" element={<Robotics />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
