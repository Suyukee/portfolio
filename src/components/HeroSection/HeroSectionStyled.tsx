'use client';

import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
	width: 180px;
	height: 52px;
	background: #689bf7;
	border: 2px solid black;
	border-radius: 10px;
	box-shadow: 3px 3px #000;

	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	-webkit-tap-highlight-color: transparent;

	&:hover {
		background: #689bf7;
		box-shadow: 3px 3px #000;
	}

	&:active {
		box-shadow: none;
		transform: translateX(3px) translateY(3px);
		transition: 0.2s;
	}
`;
