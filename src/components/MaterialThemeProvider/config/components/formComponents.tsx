import IconDropdown from '@/icons/IconDropdown';
import { Components, Theme } from '@mui/material';
import { transform } from 'next/dist/build/swc';

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
					borderRadius: `${theme.shape.borderRadius * 0.75}px`,
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
			root: {
				'.MuiMenu-paper': {
					borderRadius: 10,
					background: '#ebebeb',
					border: '2px solid #c2c2c2',
				},
				// '&.Mui-selected .MuiMenuItem-root': {
				// 	background: '#689bf7',
				// },
			},
		},
	},
};

export default formComponents;
