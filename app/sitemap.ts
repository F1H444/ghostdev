import { MetadataRoute } from 'next';
import { fetchProjects } from '@/lib/projects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Dalam production, ganti dengan process.env.NEXT_PUBLIC_SITE_URL
  const baseUrl = 'http://localhost:3000'; 
  
  // Ambil semua project secara dinamis dari database (atau static project)
  const projects = await fetchProjects();
  
  // Buat mapping rute dinamis untuk SEO sitemap
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Masukkan rute statis wajib beserta URL dinamis
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...projectUrls,
  ];
}
