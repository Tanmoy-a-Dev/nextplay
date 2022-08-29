/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		...defaultTheme,
		screens: {
			xs: "375px",
			semiTab: "510px",
			...defaultTheme.screens,
		},

		extend: {
			colors: {
				color: {
					orange: "#fb923c",
					// orange: "#27AE60",
					green: "#27AE60",
					light: "#EAECEE",
					dark: "#1e293b",
					border: "#94a3b8",
					icon: "#1e293b",
				},
			},
			fontFamily: {
				mont: ["Montserrat"],
				pop: ["Poppins"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
	variants: {
		scrollbar: ["rounded"],
	},
};
