'use client';

import { css, styled } from '@mui/material';

export const StyledSpanText = styled('span')(
	({ theme }) => css`
		padding: 0 4px;
		background: ${theme.palette.secondary.main};
	`,
);
