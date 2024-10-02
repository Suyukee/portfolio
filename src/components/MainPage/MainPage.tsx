import { Grid, Paper } from '@mui/material';
import { DrawnPatternBox } from '@/components/MainPage/MainPageStyled';
import HeroSection from '@/components/HeroSection';
import StackSection from '@/components/StackSection';
import AboutMe from '@/components/AboutMe';
import MyProjects from '@/components/MyProjects';
import ShapeStar from '@/icons/ShapeStar';
import DrawnPattern from '../DrawnPattern/DrawnPattern';

function MainPage() {
	return (
		<Grid container component="main" spacing={2} maxWidth={900}>
			<Grid item component="section" xs={12} md={4} position="relative">
				<Paper variant="outlined">
					<DrawnPatternBox top={196} left={-40}>
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

			<Grid item component="section" xs={12} position="relative">
				<Paper variant="outlined">
					<DrawnPatternBox top={0} right={-15}>
						<ShapeStar />
					</DrawnPatternBox>
					<MyProjects />
				</Paper>
			</Grid>

			<Grid item component="section" xs={12}>
				<Paper variant="outlined">
					<h1>контакты</h1>
				</Paper>
			</Grid>
		</Grid>
	);
}

export default MainPage;
