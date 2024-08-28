import { Grid } from '@mui/material';
import { DrawnPatternBox, StyledPaper } from '@/components/MainPage/MainPageStyled';
import HeroSection from '@/components/HeroSection';
import StackSection from '@/components/StackSection';
import AboutMe from '@/components/AboutMe';
import MyProjects from '@/components/MyProjects';
import DrawnPattern from '../DrawnPattern/DrawnPattern';

function MainPage() {
	return (
		<Grid container component="main" spacing={3} maxWidth={900}>
			<Grid item component="section" xs={12} md={4} position="relative">
				<DrawnPatternBox position="absolute" top={185} left={-30}>
					<DrawnPattern />
				</DrawnPatternBox>
				<StyledPaper>
					<HeroSection />
				</StyledPaper>
			</Grid>
			<Grid item component="section" xs={12} md={8}>
				<StyledPaper>
					<StackSection />
				</StyledPaper>
			</Grid>
			<Grid item component="section" xs={12}>
				<StyledPaper>
					<AboutMe />
				</StyledPaper>
			</Grid>
			<Grid item component="section" xs={12}>
				<StyledPaper>
					<MyProjects />
				</StyledPaper>
			</Grid>
		</Grid>
	);
}

export default MainPage;
