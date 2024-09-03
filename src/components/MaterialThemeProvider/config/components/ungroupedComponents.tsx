import { Components, Theme } from '@mui/material';

const ungroupedComponents: Components<Omit<Theme, 'components'>> = {
	MuiButtonBase: {
		styleOverrides: {
			root: {
				WebkitTapHighlightColor: 'transparent',
				userSelect: 'none',
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				WebkitTapHighlightColor: 'transparent',
				userSelect: 'none',
			},
		},
	},
};

export default ungroupedComponents;
