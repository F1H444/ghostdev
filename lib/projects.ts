import { createClient, Project as SupabaseProject } from './supabase';

export interface Project {
  id: number | string;
  slug: string;
  title: string;
  category: string;
  tech: string[];
  image: string;
  longImages?: string[]; // Array of long vertical screenshots for gallery
}

// Static fallback data
const staticProjects: Project[] = [
  {
    id: 1,
    slug: "website-bromotrail",
    title: "Website Bromotrail",
    category: "Pemrograman Web",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "Framer-Motion"],
    image: "/hero/bromotrail-hero.png",
    longImages: ["/all/bromotrail-all.jpeg"],
  },
  {
    id: 2,
    slug: "website-mumu-kitchen",
    title: "Website Mumu Kitchen",
    category: "Pemrograman Web",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "Framer-Motion"],
    image: "/hero/mumu-hero.png",
  },
  {
    id: 3,
    slug: "website-sbytickets",
    title: "Website SbyTickets",
    category: "Pemrograman Web",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "Framer-Motion"],
    image: "/hero/sbytickets-hero.png",
    longImages: ["/all/sbytickets-all.jpeg"],
  },
  {
    id: 4,
    slug: "website-sikalori",
    title: "Website Sikalori",
    category: "Pemrograman Web",
    tech: ["Next.js", "React", "Tailwind", "Framer-Motion"],
    image: "/hero/sikalori-hero.png",
    longImages: ["/all/sikalori-all.jpeg"],
  },
  {
    id: 5,
    slug: "website-befresh",
    title: "Website Befresh",
    category: "Pemrograman Web",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "Framer-Motion"],
    image: "/hero/befresh-hero.png",
    longImages: ["/all/befresh-all.jpeg"],
  },
];

// Convert Supabase project to local Project format
function convertProject(p: SupabaseProject): Project {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    category: p.category,
    tech: p.tech,
    image: p.image,
    longImages: p.long_images || undefined,
  };
}

// Fetch projects from Supabase, fallback to static
export async function fetchProjects(): Promise<Project[]> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      console.log('Using static projects fallback');
      return staticProjects;
    }

    return data.map(convertProject);
  } catch {
    console.log('Using static projects fallback');
    return staticProjects;
  }
}

// Fetch single project by slug from Supabase
export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !data) {
      // Fallback to static
      const staticProject = staticProjects.find(p => p.slug === slug);
      return staticProject || null;
    }

    return convertProject(data);
  } catch {
    const staticProject = staticProjects.find(p => p.slug === slug);
    return staticProject || null;
  }
}

// Keep static export for backward compatibility during transition
export const projects: Project[] = staticProjects;

