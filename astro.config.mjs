// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://exiao07.github.io",
  base: "/ethan-portfolio1",
  vite: {
    plugins: [tailwindcss()],
  },
});
