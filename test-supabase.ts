import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xusdgjpmhfztallfffnz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1c2RnanBtaGZ6dGFsbGZmZm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzOTY2MDAsImV4cCI6MjA4NTk3MjYwMH0.VPhLnozCE2IhMzmPBFYyRwVQCaXnqYQBNFHLGKy0v8E';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkReviews() {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching reviews:', error);
  } else {
    console.log('Reviews data:', data);
  }
}

checkReviews();
