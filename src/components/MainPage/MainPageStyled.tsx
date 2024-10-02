'use client';

import { styled } from '@mui/material';

type DrawnPatternProps = { top?: number; left?: number; right?: number; hide?: boolean };

export const DrawnPatternBox = styled('div')<DrawnPatternProps>(({ theme, top, left, right }) => ({
	position: 'absolute',
	top: `${top}px`,
	left: `${left}px`,
	right: `${right}px`,

	[theme.breakpoints.down(1010)]: {
		display: '$none',
	},
}));
