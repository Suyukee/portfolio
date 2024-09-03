import { Components, Theme } from '@mui/material';

const ungroupedComponents: Components<Omit<Theme, 'components'>> = {
	MuiButtonBase: {
		styleOverrides: {
			root: {
				WebkitTapHighlightColor: 'transparent',
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				WebkitTapHighlightColor: 'transparent',
			},
		},
	},
};

export default ungroupedComponents;
