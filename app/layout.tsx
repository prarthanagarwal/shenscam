import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { Providers } from './providers';

export const metadata: Metadata = {
	title: 'Shenscam',
	description: 'Smooth-scrolling portfolio built with Next.js 15',
};

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400','600','700','900'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={montserrat.className}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
