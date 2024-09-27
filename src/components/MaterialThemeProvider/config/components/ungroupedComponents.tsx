import { Components, Theme } from '@mui/material';

const ungroupedComponents: Components<Omit<Theme, 'components'>> = {
	MuiLink: {
		styleOverrides: {
			root: {
				userSelect: 'none',
				WebkitTapHighlightColor: 'transparent',
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: ({ theme }) => ({
				borderRadius: theme.shape.borderRadius,
				boxShadow: '3px 3px #2c2c2c',
			}),
			text: {},
			contained: {
				border: '2px solid #2c2c2c',
				borderRadius: 20,
			},
			outlined: {
				border: '2px solid #2c2c2c',
			},
		},
	},
	MuiPaper: {
		styleOverrides: {
			root: ({ theme }) => ({
				background: '#ebebeb',
				borderRadius: `${theme.shape.borderRadius * 1.5}px`,
			}),
			outlined: {
				border: '3px solid #2c2c2c',
			},
		},
	},
};

export default ungroupedComponents;
