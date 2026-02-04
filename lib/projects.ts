export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  tech: string[];
  image: string;
  size: "large" | "small";
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "vortex-engine",
    title: "Vortex Engine",
    category: "AI & Innovasi",
    tech: ["Next.js", "Python", "TensorFlow", "Tailwind"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "large"
  },
  {
    id: 2,
    slug: "nebula-store",
    title: "Nebula Store",
    category: "E-commerce Premium",
    tech: ["Shopify", "React", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "small"
  },
  {
    id: 3,
    slug: "ghost-core",
    title: "Ghost Core",
    category: "Identitas Brand",
    tech: ["Three.js", "Framer", "WebGLEngine"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "small"
  },
  {
    id: 4,
    slug: "silent-arcs",
    title: "Silent Arcs",
    category: "Visual Arsitektur",
    tech: ["Blender", "Unity", "C#", "React"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "large"
  },
  {
    id: 5,
    slug: "nexus-dashboard",
    title: "Nexus Dashboard",
    category: "SaaS Enterprise",
    tech: ["Next.js", "Go", "PostgreSQL", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "small"
  },
  {
    id: 6,
    slug: "luna-os",
    title: "Luna OS",
    category: "Sistem Operasi Web",
    tech: ["React", "Rust", "WebAssembly"],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "small"
  },
  {
    id: 7,
    slug: "quantum-nft",
    title: "Quantum NFT",
    category: "Fintech & Web3",
    tech: ["Solidity", "Ether.js", "Next.js"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "large"
  },
  {
    id: 8,
    slug: "atlas-map",
    title: "Atlas Explorer",
    category: "Geospasial AI",
    tech: ["Mapbox", "Deck.gl", "Python"],
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90",
    size: "large"
  }
];
