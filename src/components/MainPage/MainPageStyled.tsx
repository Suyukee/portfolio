'use client';

import { styled } from '@mui/material';

export const DrawnPatternBox = styled('div')(({ theme }) => ({
	position: 'absolute',
	top: '205px',
	left: '-30px',

	[theme.breakpoints.down('lg')]: {
		display: 'none',
	},
}));
