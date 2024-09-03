'use client';

import { createTheme } from '@mui/material/styles';

import typography from '@/components/MaterialThemeProvider/config/typography';
import palette from '@/components/MaterialThemeProvider/config/palette';
import formComponents from '@/components/MaterialThemeProvider/config/components/formComponents';
import ungroupedComponents from '@/components/MaterialThemeProvider/config/components/ungroupedComponents';

const theme = createTheme({
	typography,
	palette,
	components: {
		...formComponents,
		...ungroupedComponents,
	},
});

export default theme;
