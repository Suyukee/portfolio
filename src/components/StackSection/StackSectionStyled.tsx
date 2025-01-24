'use client';

import { styled } from '@mui/material';
import IconStar from '@/icons/IconStar';

export const StyledMainStackList = styled('ul')`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 20px;

	margin: 0;
	padding: 0 20px;
`;

export const StyledMainStackItem = styled('li')`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const StyledIcon = styled('div')`
	width: 30px;
	height: 30px;
`;

export const StyledAdditionalStackList = styled('ul')`
	display: flex;
	flex-direction: column;
	gap: 10px;

	margin: 0;
	padding: 0;
`;

export const StyledAdditionalStackItem = styled('li')`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const StyledIconStar = styled('div')`
	padding-top: 4px;
	min-width: 26px;
`;
