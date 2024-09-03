'use client';

import { Box, css, styled, Typography } from '@mui/material';

export const StyledTypography = styled(Typography)`
	position: relative;
	z-index: 2;
`;

// TODO: Переписать на динамические длины
export const StyledTextBackground = styled(Box)(
	({ theme }) => css`
		width: 92px;
		height: 28px;

		position: absolute;
		top: 2px;
		left: -4px;

		background: ${theme.palette.secondary.main};
		z-index: 1;
	`,
);
