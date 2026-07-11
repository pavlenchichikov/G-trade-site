import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base so the static bundle works on GitHub Pages project pages,
// Netlify, or from a plain file server without further configuration.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  server: {
    port: 5180,
    // If 5180 is busy, Vite picks the next free port and prints it - so the URL
    // in the terminal is always the source of truth.
    strictPort: false,
    // Bind on all interfaces (IPv4 + IPv6) so 127.0.0.1 and localhost both work.
    host: true,
    // Open the browser on the correct port automatically.
    open: true,
  },
});
