import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://hrylxtzipcfsgtjineqa.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyeWx4dHppcGNmc2d0amluZXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MDAxNjYsImV4cCI6MjA5NDM3NjE2Nn0.r7kOeR2E1AEANw0Pgnf1MCtYZ1h5l6a5MtClJ3LvIyU"

export const supabase = createClient(supabaseUrl, supabaseKey)