import { Box } from '@mui/material';
import {
	StyledTextBackground,
	StyledTypography,
} from '@/components/TypographyWithBackground/TypographyWithBackgroundStyled';

type TypographyWithBackgrondProps = {
	text: string;
	variant: TypographyVariant;
};

type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'body1'
	| 'body2';

function TypographyWithBackgrond({ text, variant }: TypographyWithBackgrondProps) {
	return (
		<Box position="relative">
			<StyledTextBackground />
			<StyledTypography variant={variant}>{text}</StyledTypography>
		</Box>
	);
}

export default TypographyWithBackgrond;
