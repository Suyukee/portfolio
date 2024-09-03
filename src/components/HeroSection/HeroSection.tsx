import Image from 'next/image';
import { Box, Link, Typography } from '@mui/material';
import { StyledButton, StyledLink } from '@/components/HeroSection/HeroSectionStyled';
import StylizedFrame from '@/components/StylizedFrame';
import TypographyWithBackgrond from '@/components/TypographyWithBackground';

function HeroSection() {
	return (
		<>
			<Link href="https://github.com/Suyukee">
				<StylizedFrame>
					<Image src="/images/avatar.jpg" width={170} height={170} alt="Фото" priority={true} />
				</StylizedFrame>
			</Link>

			<Box display="flex" flexDirection="column" alignItems="center">
				<Typography variant="h1">Привет, я Вова</Typography>
				<TypographyWithBackgrond text="frontend-разработчик" variant="subtitle1" />
			</Box>

			<Link href="/files/резюме.pdf" variant="button" color="#fff" underline="none">
				<StyledButton variant="contained">
					<Typography variant="button" color="white" textTransform="none">
						Моё резюме
					</Typography>
				</StyledButton>
			</Link>
		</>
	);
}

export default HeroSection;
