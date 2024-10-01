'use client';

import { Button, styled, Typography } from '@mui/material';
import Image from 'next/image';

export const StyledLinkProjectCard = styled(Button)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: 0,
	background: theme.palette.secondary.light,

	':hover': {
		background: theme.palette.secondary.light,
	},
}));

export const StyledTypographyProjectCard = styled(Typography)`
	padding: 18px;
	width: 100%;

	text-align: center;
	border-top: 2px solid #2c2c2c;
`;

export const StyledImageProjectCard = styled(Image)(({ theme }) => ({
	width: '100%',
	borderRadius: '18px 18px 0 0',
	objectFit: 'cover',

	[theme.breakpoints.down('sm')]: {
		height: '200px',
	},
}));
