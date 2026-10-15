export const SITE_URL = "https://brentwoodchildrensacademy.com";

const pageLabels: Record<string, string> = {
  "/": "Childcare in Houston",
  "/difference": "Our Difference",
  "/programs": "Childcare Programs",
  "/robotics-steam": "Robotics & STEAM",
  "/tuition": "Tuition & Financial Aid",
  "/about": "About Our Academy",
  "/parent-resources": "Parent Resources",
  "/contact": "Contact Us",
  "/schedule-tour": "Schedule a Tour",
  "/programs/infant-toddler": "Infant & Toddler Care",
  "/programs/preschool": "Preschool",
  "/programs/pre-kindergarten": "Pre-Kindergarten",
  "/programs/school-age": "School Age & After School Care",
  "/programs/summer-camp": "Summer Camp",
  "/testimonials": "Parent Reviews",
  "/gallery": "Photo Gallery",
  "/es": "Guardería y Preescolar",
};

export function getPageTitle(path: string, fallback: string) {
  const label = pageLabels[path];
  if (!label) return fallback;
  const suffix = path === "/" ? "Brentwood Children’s Academy" : "Brentwood Academy Houston";
  return `${label} | ${suffix}`;
}