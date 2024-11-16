const { color } = require("framer-motion");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
			colors: {
				mainColor: "#01009B",
			},
			boxShadow: {
				customShadow: "0 10px 15px rgba(1,0,155,0.4)",
				customShadowLg: "0 4px 10px rgba(1,0,155,0.3)",
			},
		},
	},
	plugins: [addVariablesForColors, require("tailwind-scrollbar-hide")],
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	);

	addBase({
		":root": newVars,
	});
}
