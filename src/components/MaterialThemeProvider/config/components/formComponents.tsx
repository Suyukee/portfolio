import IconDropdown from '@/icons/IconDropdown';
import { Components, Theme } from '@mui/material';

const formComponents: Components<Omit<Theme, 'components'>> = {
	MuiSelect: {
		defaultProps: {
			IconComponent: IconDropdown,
		},
		styleOverrides: {
			root: ({ theme }) => ({
				borderRadius: 0,
				textAlign: 'center',
				'.MuiOutlinedInput-notchedOutline': {
					border: '2px solid #2c2c2c',
					borderRadius: theme.shape.borderRadius,
					boxShadow: '3px 3px #2c2c2c',
				},
				'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
					borderColor: '#c2c2c2',
					boxShadow: '3px 3px #c2c2c2',
				},
				'&.Mui-focused .MuiInputLabel-label': {
					color: '#c2c2c2',
				},
			}),
		},
	},
	MuiMenu: {
		styleOverrides: {
			root: ({ theme }) => ({
				'.MuiMenu-paper': {
					borderRadius: `${theme.shape.borderRadius * 0.5}px`,
					background: '#ebebeb',
					border: '2px solid #c2c2c2',
				},
			}),
		},
	},
	MuiMenuItem: {
		styleOverrides: {
			root: ({ theme }) => ({
				'&.Mui-selected': {
					background: theme.palette.secondary.light,
					'&:hover': {
						background: theme.palette.secondary.main,
					},
				},
				'&.Mui-selected:hover': {
					background: theme.palette.secondary.main,
				},
				'&.Mui-selected:first-of-type': {
					background: theme.palette.secondary.light,
				},
			}),
		},
	},
};

export default formComponents;
