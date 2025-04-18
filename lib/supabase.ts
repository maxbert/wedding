import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qjbawlfzavmgomqjgore.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqYmF3bGZ6YXZtZ29tcWpnb3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NDE2MDcsImV4cCI6MjA2MDUxNzYwN30.qu_P7vqOQOoms2RSmsRfJ4NS0Y0oEx_IjJh4as9I1TU'

export const supabase = createClient(supabaseUrl, supabaseKey) 