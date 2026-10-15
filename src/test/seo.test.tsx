// @vitest-environment node
import { describe, expect, it } from "vitest";
import { render } from "../entry-server";

const routes = ["/", "/difference", "/programs", "/robotics-steam", "/tuition", "/about", "/parent-resources", "/contact", "/schedule-tour", "/programs/infant-toddler", "/programs/preschool", "/programs/pre-kindergarten", "/programs/school-age", "/programs/summer-camp", "/testimonials", "/gallery", "/es"];

describe("prerendered route metadata", () => {
  it.each(routes)("renders complete, concise metadata for %s", (route) => {
    const { head } = render(route);
    const title = head.match(/<title[^>]*>(.*?)<\/title>/)?.[1]
      .replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&amp;/g, "&");
    expect(title).toBeDefined();
    expect(title?.length).toBeGreaterThanOrEqual(30);
    expect(title?.length).toBeLessThanOrEqual(60);
    expect(title).toContain("Houston");
    for (const property of ["og:title", "og:type", "og:image", "og:url"]) {
      expect(head.match(new RegExp(`property="${property}"`, "g"))).toHaveLength(1);
    }
    expect(head).toContain(`property="og:url" content="https://brentwoodchildrensacademy.com${route}"`);
    expect(head).toContain('property="og:type" content="website"');
    expect(head).toContain('property="og:image" content="https://brentwoodchildrensacademy.com/assets/hero-children-CGjjcDXs.jpg"');
    expect(head).toContain('name="twitter:card" content="summary_large_image"');
    expect(head).toContain('name="twitter:image" content="https://brentwoodchildrensacademy.com/assets/hero-children-CGjjcDXs.jpg"');
  });
});