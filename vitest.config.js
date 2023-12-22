// vitest.config.js
import { defineConfig } from "vitest/config";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), svgr()],
    test: {
        files: [
            "**/__tests__/**/*.{spec,test}.{js,jsx,ts}",
            "**/*.{spec,test}.{js,jsx,ts}",
        ],
        globals: true,
        environment: "jsdom",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
