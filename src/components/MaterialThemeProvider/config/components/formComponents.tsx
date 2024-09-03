import IconDropdown from '@/icons/IconDropdown';
import { Components, Theme } from '@mui/material';

const formComponents: Components<Omit<Theme, 'components'>> = {
	MuiSelect: {
		// defaultProps: {
		// 	IconComponent: IconDropdown,
		// },
		styleOverrides: {
			root: {
				borderRadius: '10px',
				'.MuiOutlinedInput-notchedOutline': { borderWidth: '2px' },
			},
		},
	},
};

export default formComponents;
