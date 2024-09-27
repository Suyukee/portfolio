'use client';

import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';
import { NextFont } from 'next/dist/compiled/@next/font';

import typography from '@/components/MaterialThemeProvider/config/typography';
import palette from '@/components/MaterialThemeProvider/config/palette';
import shape from '@/components/MaterialThemeProvider/config/shape';
import formComponents from '@/components/MaterialThemeProvider/config/components/formComponents';
import ungroupedComponents from '@/components/MaterialThemeProvider/config/components/ungroupedComponents';

const customFont: NextFont = localFont({
	src: '../../../public/fonts/comic-sans.ttf',
	display: 'swap',
});

const theme = createTheme({
	typography: {
		fontFamily: customFont.style.fontFamily,
		...typography,
	},
	palette,
	shape,
	components: {
		...formComponents,
		...ungroupedComponents,
	},
});

export default theme;
