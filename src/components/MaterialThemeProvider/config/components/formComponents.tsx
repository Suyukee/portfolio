import { Components, Theme } from '@mui/material';

const formComponents: Components<Omit<Theme, 'components'>> = {
	MuiSwitch: {
		styleOverrides: {
			root: ({ theme }) => ({
				'.MuiSwitch-switchBase:not(.Mui-checked) + .MuiSwitch-track': {
					backgroundColor: `${theme.palette.text.secondary} !important`,
				},
			}),
		},
	},

	MuiSelect: {
		styleOverrides: {
			root: {
				borderRadius: '10px',
				'.MuiOutlinedInput-notchedOutline': { borderWidth: '2px' },
				'&.Mui-focused': { '.MuiOutlinedInput-notchedOutline': { borderColor: '#689BF7' } },
				'&.MuiInputLabel-shrink': {
					color: 'red',
				},
				icon: {
					color: 'red',
				},
			},
		},
	},
};

export default formComponents;
