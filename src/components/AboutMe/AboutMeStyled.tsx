'use client';

import { Box, styled, Typography } from '@mui/material';
import IconSmile from '@/icons/IconSmile';

export const StyledAboutMeBox = styled(Box)`
	padding: 0 10px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
`;

export const StyledAboutMeList = styled('ul')`
	margin: 0;
	padding: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;
	list-style: none;
`;

export const StyledAboutMeItem = styled('li')`
	display: flex;
	gap: 10px;
`;

export const StyledIconStar = styled('div')`
	padding-top: 6px;
	min-width: 26px;
`;

export const StyledContactBox = styled(Box)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 25px;
	font-style: normal;
`;

export const StyledContactsTypography = styled(Typography)`
	text-align: center;
	z-index: 2;
`;

export const StyledIconSmile = styled('div')`
	position: absolute;
	top: -5px;
	left: -20px;
`;
