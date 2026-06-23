import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mkdirSync, writeFileSync } from "node:fs";

const html = String.raw`<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Protótipo navegável do redesign da Pauliceia 2.0." />
    <title>Pauliceia 2.0</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/main.css" />
    <script type="module" crossorigin src="/assets/main.js"></script>
  </head>
  <body><div id="root"></div></body>
</html>`;

export default defineConfig({
  plugins: [
    react(),
    {
      name: "pauliceia-html-writer",
      closeBundle() {
        mkdirSync("dist", { recursive: true });
        writeFileSync("dist/index.html", html);
      },
    },
  ],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        entryFileNames: "assets/main.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/main[extname]",
      },
    },
  },
});
