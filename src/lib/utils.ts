import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Combine class names and merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Our theme's common colors as an object for easy reference
export const themeColors = {
  // Primary brand colors  
  maroon: "#d1385b",
  maroonDark: "#b82e4e",
  cream: "#ffebb5", 
  pink: "#ec3e85",
  
  // Text colors
  darkBrown: "#3D2314",
  textPrimary: "#3D2314",
  textSecondary: "#71717a",
  
  // UI colors
  background: "#fbf4eb",
  white: "#ffffff",
  card: "#ffffff",
  border: "#e4e4e7",
  accent: "#c4b5fd",
}

// Common styles for page layouts
export const pageStyles = {
  mainBackground: "min-h-screen bg-[#fbf4eb] pt-20 pb-12",
  container: "max-w-4xl mx-auto w-full",
  heading: "montserrat text-4xl font-bold mb-8 text-center text-[#c43670]",
  subheading: "font-['Montserrat'] text-2xl font-semibold mb-2 text-[#3D2314]",
  paragraph: "font-['Montserrat'] text-gray-700",
  backLink: "font-['Montserrat'] text-xl flex items-center text-[#3D2314] hover:text-[#d1385b] transition-colors",
  card: "bg-white/80 rounded-xl overflow-hidden shadow-md",
  button: "font-['Montserrat'] py-2 px-6 bg-[#d1385b] text-white rounded-full hover:bg-[#b82e4e] transition-colors",
  navItem: "font-['Montserrat'] text-lg font-medium text-[#3D2314] hover:text-[#d1385b] transition-colors",
  mainContent: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
}
