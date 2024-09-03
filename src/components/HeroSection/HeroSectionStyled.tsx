'use client';

import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
	width: 180px;
	height: 52px;
	border: 2px solid;
	border-radius: 10px;
	box-shadow: 3px 3px #000;

	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	-webkit-tap-highlight-color: transparent;

	&:hover {
		box-shadow: 3px 3px #000;
	}

	&:active {
		box-shadow: none;
		transform: translateX(3px) translateY(3px);
		transition: 0.2s;
	}
`;
