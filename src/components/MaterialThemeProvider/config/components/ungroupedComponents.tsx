import { Components, Theme } from '@mui/material';

const ungroupedComponents: Components<Omit<Theme, 'components'>> = {
	MuiButtonBase: {
		styleOverrides: {
			root: {
				userSelect: 'none',
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				userSelect: 'none',
			},
		},
	},
};

export default ungroupedComponents;
