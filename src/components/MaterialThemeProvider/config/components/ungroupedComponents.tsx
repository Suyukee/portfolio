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
			},
			outlined: {
				border: '2px solid #2c2c2c',
			},
		},
	},
	MuiPaper: {
		styleOverrides: {
			root: ({ theme }) => ({
				'&.MuiPaper-root:not(.MuiMenu-paper)': {
					padding: 25,
					height: '100%',

					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 15,

					background: '#ebebeb',
					borderRadius: `${theme.shape.borderRadius * 1.5}px`,
				},
			}),
			outlined: {
				border: '3px solid #2c2c2c',
			},
		},
	},
};

export default ungroupedComponents;
