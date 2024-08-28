'use client';

import { Box, styled, Typography } from '@mui/material';

export const StyledTypography = styled(Typography)`
	position: relative;
	z-index: 2;
`;

// TODO: Переписать на динамические длины
export const StyledTextBackground = styled(Box)(`
	width: 92px;
	height: 28px;

	position: absolute;
	top: 5px;
	left: -4px;

	background: #b195f3;
	z-index: 1;
`);
