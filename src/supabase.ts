import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// True once the two public env vars are set (see .env). Until then the Live
// Signals section degrades gracefully instead of throwing.
export const isSupabaseConfigured = Boolean(url && anon);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anon as string, {
      auth: { persistSession: true, autoRefreshToken: true },
    })
  : null;

// Where the magic-link should return the user: the current page URL (without
// hash/query). Correct on the GitHub Pages subpath and on localhost alike, and
// safe with the relative `base: "./"` build.
export const authRedirectTo = (): string =>
  window.location.origin + window.location.pathname;
