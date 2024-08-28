import { Grid } from '@mui/material';
import { StyledPaper } from '@/components/MainPage/MainPageStyled';
import HeroSection from '@/components/HeroSection';
import StackSection from '@/components/StackSection';
import AboutMe from '../AboutMe';
import MyProjects from '../MyProjects/MyProjects';

function MainPage() {
	return (
		<Grid container component="main" spacing={3} maxWidth={900}>
			<Grid item component="section" xs={12} md={4}>
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
