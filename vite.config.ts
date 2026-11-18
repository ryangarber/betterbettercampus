/// <reference types="vitest/config" />

import Preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import Monkey from "vite-plugin-monkey";

export default defineConfig({
	plugins: [
		Preact(),
		Monkey({
			entry: "src/index.ts",
			userscript: {
				name: "BetterBetterCampus",
				namespace: "https://ryangarber.dev/betterbettercampus",
				match: ["https://canvas.instructure.com/*", "https://learn.vccs.edu/*"],
			},
		}),
	],
	test: {
		globals: true,
	},
});
