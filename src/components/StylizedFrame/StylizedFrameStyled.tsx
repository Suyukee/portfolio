'use client';

import { styled } from '@mui/material';

export const Frame = styled('div')`
	position: relative;
	display: flex;
	border: 2px solid #2c2c2c;
`;

export const Dot = styled('div')`
	position: absolute;
	width: 9px;
	height: 9px;

	background-color: #fff;
	border: 2px solid #2c2c2c;
`;
