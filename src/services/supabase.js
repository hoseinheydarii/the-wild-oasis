import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ntlqbgqmelibrrcucfow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50bHFiZ3FtZWxpYnJyY3VjZm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMzg5MzAsImV4cCI6MjAxODcxNDkzMH0.TubVt57F9RulFTeAW2dJqMBuWUK8BlXnTlIj3hZOYMk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
