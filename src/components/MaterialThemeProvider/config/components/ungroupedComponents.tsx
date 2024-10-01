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
			root: {
				textTransform: 'none',
			},
			contained: ({ theme }) => ({
				border: '2px solid #2c2c2c',
				borderRadius: theme.shape.borderRadius,
				boxShadow: '3px 3px #2c2c2c',

				'&:active': {
					filter: 'brightness(95%)',
				},
				'&:hover': {
					boxShadow: 'none',
					transform: 'translateX(3px) translateY(3px)',
					transition: '0.1s',
				},
			}),
		},
	},
	MuiPaper: {
		styleOverrides: {
			root: ({ theme }) => ({
				'&.MuiPaper-root:not(.MuiMenu-paper)': {
					padding: theme.spacing(3),
					height: '100%',

					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 15,

					background: '#ebebeb',
					borderRadius: `${theme.shape.borderRadius * 1.5}px`,

					[theme.breakpoints.down('md')]: {
						padding: '25px 15px',
					},
				},
			}),
			outlined: {
				border: '2px solid #2c2c2c',
			},
		},
	},
};

export default ungroupedComponents;
