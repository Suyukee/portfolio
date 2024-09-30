import IconDropdown from '@/icons/IconDropdown';
import { Components, Theme } from '@mui/material';

const formComponents: Components<Omit<Theme, 'components'>> = {
	MuiSelect: {
		defaultProps: {
			IconComponent: IconDropdown,
		},
		styleOverrides: {
			root: {
				borderRadius: '15px',
				'.MuiOutlinedInput-notchedOutline': { borderWidth: '2px' },
				textAlign: 'center',

				'.MuiSelect-select': { borderRadius: 0 },
				'.MuiSelect-icon': { position: 'absolute', right: 20 },
			},
		},
	},
};

export default formComponents;
