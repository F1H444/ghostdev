import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// Types for projects
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tech: string[];
  image: string;
  long_images?: string[] | null;
  size: "large" | "small";
  description?: string | null;
  created_at?: string;
  updated_at?: string;
}

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  
  return data || []
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    console.error('Error fetching project:', error)
    return null
  }
  
  return data
}

// Create new project
export async function createProject(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<Project | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('projects')
    .insert([project])
    .select()
    .single()
  
  if (error) {
    console.error('Error creating project:', error)
    return null
  }
  
  return data
}

// Update project
export async function updateProject(id: string, project: Partial<Project>): Promise<Project | null> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('projects')
    .update({ ...project, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    console.error('Error updating project:', error)
    return null
  }
  
  return data
}

// Delete project
export async function deleteProject(id: string): Promise<boolean> {
  const supabase = createClient()
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)
  
  if (error) {
    console.error('Error deleting project:', error)
    return false
  }
  
  return true
}

// Upload image to Supabase Storage
export async function uploadProjectImage(file: File, folder: string = 'hero'): Promise<string | null> {
  const supabase = createClient()
  const fileExt = file.name.split('.').pop()
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`
  
  const { error } = await supabase.storage
    .from('project-images')
    .upload(fileName, file)
  
  if (error) {
    console.error('Error uploading image:', error)
    return null
  }
  
  const { data: { publicUrl } } = supabase.storage
    .from('project-images')
    .getPublicUrl(fileName)
  
  return publicUrl
}
