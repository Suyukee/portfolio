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

export const StyledPaper = styled('div')`
	padding: 25px;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;

	background: #ebebeb;
	border: 3px solid #000;
	border-radius: 15px;
	box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
`;
