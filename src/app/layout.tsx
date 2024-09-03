import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material';
import localFont from 'next/font/local';
import './globals.css';
import theme from '@/components/MaterialThemeProvider';

export const metadata: Metadata = {
	title: 'Portfolio website',
	description: 'Portfolio website Козырева Владимира',
};

const comicSans = localFont({ src: '../../public/fonts/comic-sans.ttf' });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={comicSans.className}>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
