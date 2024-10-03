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

export const StyledContactBox = styled(Box)(({ theme }) => ({
	paddingTop: 30,
	display: 'flex',
	justifyContent: 'center',
	gap: 15,

	[theme.breakpoints.down(750)]: {
		flexDirection: 'column',
	},
}));

export const StyledContactItem = styled(Typography)<DrawnPatternProps>(({ background }) => ({
	padding: '10px 20px',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: 10,

	textAlign: 'center',
	background: `${background}`,
	border: '2px solid #2c2c2c',
	borderRadius: 30,
	// boxShadow: '3px 3px #2c2c2c',
}));
