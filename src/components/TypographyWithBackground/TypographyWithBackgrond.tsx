import { StyledSpanText } from '@/components/TypographyWithBackground/TypographyWithBackgroundStyled';

type TypographyWithBackgrondProps = {
	text: string;
};

function TypographyWithBackgrond({ text }: TypographyWithBackgrondProps) {
	return <StyledSpanText>{text}</StyledSpanText>;
}

export default TypographyWithBackgrond;
