import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({
      include: /\.(jsx|tsx)$/,
      babel: {
        plugins: ["styled-components"],
        babelrc: false,
        configFile: false,
      },
    }),
    svgr({
      svgrOptions: {
        // Forward `ref` to the root SVG tag.
        ref: true,
        // Do not prefix `class`/`id` attributes.
        svgo: false,
      },
      // Both `.svg` and `.svg?react` imports are React components
      include: ["**/*.svg", "**/*.svg?react"],
    }),
  ],
});
