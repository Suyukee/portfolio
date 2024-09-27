'use client';

import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
	width: 180px;
	height: 52px;

	&:active {
		box-shadow: 3px 3px #000;
		filter: brightness(95%);
	}

	&:hover {
		box-shadow: none;
		transform: translateX(3px) translateY(3px);
		transition: 0.2s;
	}
`;
