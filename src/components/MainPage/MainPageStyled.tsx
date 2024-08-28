'use client';

import { Box, styled } from '@mui/material';

export const DrawnPatternBox = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: '185px',
	left: '-30px',

	[theme.breakpoints.down('md')]: {
		left: '10px',
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
	border: 2px solid #000;
	border-radius: 15px;
	box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
`;
