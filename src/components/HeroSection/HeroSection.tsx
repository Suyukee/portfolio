import Image from 'next/image';
import { Box, Link, Typography } from '@mui/material';
import { StyledButton } from '@/components/HeroSection/HeroSectionStyled';
import StylizedFrame from '@/components/StylizedFrame';
import TypographyWithBackgrond from '@/components/TypographyWithBackground';
import DrawnPattern from '@/components/DrawnPattern';

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
				<Typography variant="h1" noWrap>
					<TypographyWithBackgrond text="frontend" />
					-разработчик
				</Typography>
			</Box>

			<StyledButton variant="contained" href="/files/резюме.pdf">
				<Typography variant="button" color="white" textTransform="none">
					Моё резюме
				</Typography>

				<DrawnPattern />
			</StyledButton>
		</>
	);
}

export default HeroSection;
