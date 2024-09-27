'use client';

import { Button, Link, styled } from '@mui/material';

// export const StyledLink = styled(Link)`
// 	user-select: none;
// `;

export const StyledButton = styled(Button)`
	width: 180px;
	height: 52px;
	border: 2px solid;
	border-radius: 10px;
	box-shadow: 3px 3px #000;

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
