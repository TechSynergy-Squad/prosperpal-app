import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL as string,
  import.meta.env.VITE_API_KEY as string
);
