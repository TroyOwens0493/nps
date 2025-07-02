/* This file configures Vite, the build tool used for this project. It defines the project root, build output directory, and entry points for different HTML pages. */
import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    root: "src/",

    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                conditions: resolve(__dirname, "src/conditions.html")
            }
        }
    }
});