import { Grid, Paper } from '@mui/material';
import { DrawnPatternBox } from '@/components/MainPage/MainPageStyled';
import HeroSection from '@/components/HeroSection';
import StackSection from '@/components/StackSection';
import AboutMe from '@/components/AboutMe';
import MyProjects from '@/components/MyProjects';
import DrawnPattern from '../DrawnPattern/DrawnPattern';

function MainPage() {
	return (
		<Grid container component="main" spacing={3} maxWidth={900}>
			<Grid item component="section" xs={12} md={4} position="relative">
				<Paper variant="outlined">
					<DrawnPatternBox>
						<DrawnPattern />
					</DrawnPatternBox>
					<HeroSection />
				</Paper>
			</Grid>

			<Grid item component="section" xs={12} md={8}>
				<Paper variant="outlined">
					<StackSection />
				</Paper>
			</Grid>
			<Grid item component="section" xs={12}>
				<Paper variant="outlined">
					<AboutMe />
				</Paper>
			</Grid>
			<Grid item component="section" xs={12}>
				<Paper variant="outlined">
					<MyProjects />
				</Paper>
			</Grid>
		</Grid>
	);
}

export default MainPage;
