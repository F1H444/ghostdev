export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  tech: string[];
  image: string;
  longImage?: string; // Standard for long vertical screenshots
  size: "large" | "small";
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "website-bromotrail",
    title: "Website Bromotrail",
    category: "Pemrograman Web",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "Framer-Motion"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "large"
  },
  {
    id: 2,
    slug: "website-mumu-kitchen",
    title: "Website Mumu Kitchen",
    category: "Pemrograman Web",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "Framer-Motion"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "small"
  },
  {
    id: 3,
    slug: "website-sbytickets",
    title: "Website SbyTickets",
    category: "Pemrograman Web",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "Framer-Motion"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "small"
  },
    {
    id: 4,
    slug: "website-sikalori",
    title: "Website Sikalori",
    category: "Pemrograman Web",
    tech: ["Next.js", "React", "Tailwind", "Framer-Motion"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "large"
  },
  {
    id:5,
    slug: "website-befresh",
    title: "Website Befresh",
    category: "Pemrograman Web",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "Framer-Motion"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "small"
  },
  {
    id: 6,
    slug: "website-Ikkar",
    title: "Website Ikkar",
    category: "Pemrograman Web",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "Framer-Motion"],
    image: "https://images.unsplash.com/photo-1561070791-26c11d204a3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "small"
  },
  {
    id: 7,
    slug: "website-solenusa",
    title: "Website Solenusa",
    category: "Pemrograman Web",
    tech: ["Code-Igniter", "PHP", "MySQL", "Tailwind", "Framer-Motion"],
    image: "https://images.unsplash.com/photo-1561070791-26c11d204a3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "large"
  },

];
