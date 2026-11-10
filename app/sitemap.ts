import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<[string, number]> = [
    ["", 1],
    ["/products", 0.9],
    ["/wholesale", 0.9],
    ["/for-business", 0.8],
    ["/sustainability", 0.6],
    ["/about", 0.6],
    ["/faq", 0.7],
    ["/contact", 0.8],
  ];
  const now = new Date();
  return routes.map(([path, priority]) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
