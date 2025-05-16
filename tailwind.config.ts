import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '#e4e4e7',
				input: '#e4e4e7',
				ring: '#c4b5fd',
				background: '#fafafa',
				foreground: '#09090b',
				primary: {
					DEFAULT: '#c4b5fd',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#e4e4e7',
					foreground: '#18181b'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#e4e4e7',
					foreground: '#71717a'
				},
				accent: {
					DEFAULT: '#e4e4e7',
					foreground: '#18181b'
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#09090b'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#09090b'
				},
				// Custom brand colors
				maroon: '#d1385b',
				cream: '#ffebb5',
				pink: '#ec3e85'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
