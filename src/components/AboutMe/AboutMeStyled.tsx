'use client';

import { Box, styled, Typography } from '@mui/material';

type DrawnPatternProps = {
	background: string;
};

export const StyledAboutMeBox = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: left;
`;

export const StyledContactItem = styled(Typography)<DrawnPatternProps>(
	({ background }) => `
	padding: 10px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	text-align: center;
	background: ${background};
	border: 2px solid #2c2c2c;
	border-radius: 30px;
`,
);
