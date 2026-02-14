const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xusdgjpmhfztallfffnz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1c2RnanBtaGZ6dGFsbGZmZm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzOTY2MDAsImV4cCI6MjA4NTk3MjYwMH0.VPhLnozCE2IhMzmPBFYyRwVQCaXnqYQBNFHLGKy0v8E';

const supabase = createClient(supabaseUrl, supabaseKey);

async function diagnostic() {
  const { data: projects, error } = await supabase.from('projects').select('image').limit(1);
  if (error) {
    console.error('DB ERROR:', error.message);
    return;
  }
  if (projects && projects.length > 0) {
    console.log('--- START ---');
    console.log('IMAGE_DATA:', projects[0].image);
    console.log('--- END ---');
  } else {
    console.log('NO_PROJECTS_FOUND');
  }
}

diagnostic();
