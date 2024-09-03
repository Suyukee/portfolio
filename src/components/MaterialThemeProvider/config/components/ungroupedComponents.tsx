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
};

export default ungroupedComponents;
