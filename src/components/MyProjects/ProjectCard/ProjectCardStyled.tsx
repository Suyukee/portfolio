'use client';

import { css, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const StyledLinkProjectCard = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StyledImageProjectCard = styled(Image)`
	width: 100%;
	border: 2px solid black;
	border-radius: 20px 20px 0 0;
	box-shadow: 3px 3px black;

	object-fit: cover;
`;

export const StyledTypographyProjectCard = styled(Typography)(
	({ theme }) => css`
		padding: 18px;
		width: 100%;

		text-align: center;

		background: ${theme.palette.secondary.light};
		border: 2px solid black;
		border-top: none;
		border-radius: 0 0 20px 20px;
		box-shadow: 3px 3px black;
	`,
);
