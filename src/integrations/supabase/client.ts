// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://aydpxkmypfcmxlmicohh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5ZHB4a215cGZjbXhsbWljb2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MDMxMzUsImV4cCI6MjA1NTE3OTEzNX0.NOObjmaA-5WczB8lrKYnMFA-GXFJZPpS9GgUJJ85p4M";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);