'use client';

import { createTheme } from '@mui/material/styles';

import typography from '@/components/MaterialThemeProvider/config/typography';
import formComponents from './config/components/formComponents';

const theme = createTheme({
	typography,
	components: {
		...formComponents,
	},
});

export default theme;
