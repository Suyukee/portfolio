'use client';

import { styled } from '@mui/material';

export const DrawnPatternBox = styled('div')(({ theme }) => ({
	position: 'absolute',
	bottom: '7px',
	left: '-105px',
	cursor: 'default',
	pointerEvents: 'none',
}));
