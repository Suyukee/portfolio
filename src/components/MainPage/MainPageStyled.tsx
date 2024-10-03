'use client';

import { styled } from '@mui/material';

type DrawnPatternProps = {
	top?: number;
	left?: number;
	right?: number;
	bottom?: number;
	hide?: boolean;
};

export const DrawnPatternBox = styled('div')<DrawnPatternProps>(
	({ theme, top, left, right, bottom, hide }) => ({
		position: 'absolute',
		top: `${top}px`,
		left: `${left}px`,
		right: `${right}px`,
		bottom: `${bottom}px`,

		[theme.breakpoints.down(1010)]: {
			display: hide ? 'none' : '',
		},
	}),
);
