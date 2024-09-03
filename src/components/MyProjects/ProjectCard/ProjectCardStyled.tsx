'use client';

import { css, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const StyledLinkProjectCard = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 20px;
	box-shadow: 3px 3px black;

	// -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	// -webkit-tap-highlight-color: transparent;

	&:active {
		box-shadow: none;
		transform: translateX(3px) translateY(3px);
		transition: 0.2s;
	}
`;

// export const StyledImageProjectCard = styled(Image)`
// 	width: 100%;
// 	border: 2px solid black;
// 	border-radius: 20px 20px 0 0;
// 	box-shadow: 3px 3px black;

// 	object-fit: cover;
// `;

export const StyledTypographyProjectCard = styled(Typography)(
	({ theme }) => css`
		padding: 18px;
		width: 100%;

		text-align: center;

		background: ${theme.palette.secondary.light};
		border: 2px solid black;
		border-top: none;
		border-radius: 0 0 20px 20px;

		&:active {
			box-shadow: none;
			transform: translateX(3px) translateY(3px);
			transition: 0.2s;
		}
	`,
);

export const StyledImageProjectCard = styled(Image)(({ theme }) => ({
	width: '100%',
	border: '2px solid black',
	borderRadius: '20px 20px 0 0',
	objectFit: 'cover',

	[theme.breakpoints.down('sm')]: {
		height: '200px',
	},
}));
