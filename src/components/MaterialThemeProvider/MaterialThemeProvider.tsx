'use client';

import { createTheme } from '@mui/material/styles';

import typography from '@/components/MaterialThemeProvider/config/typography';
import palette from '@/components/MaterialThemeProvider/config/palette';
import formComponents from './config/components/formComponents';

const theme = createTheme({
	typography,
	palette,
	components: {
		...formComponents,
	},
});

export default theme;
