import { Box, Typography } from '@mui/material';
import { StyledAboutMeBox } from './AboutMeStyled';

const factsAboutMe = [
	'Бакалавриат в IT сфере',
	'Прошёл курс TypeScript + React',
	'Больше года обучения',
	'Прошёл восьминедельную стажировку в IT-компании на позиции frontend-разработчик ',
];

function AboutMe() {
	return (
		<>
			<Typography variant="h1">Обо мне</Typography>
			<StyledAboutMeBox>
				<Typography component="ol" maxWidth={750} display="flex" flexDirection="column" gap={2}>
					{factsAboutMe.map((fact, index) => (
						<Typography key={index} component="li" variant="subtitle1">
							{fact}
						</Typography>
					))}
				</Typography>
			</StyledAboutMeBox>
			<Box>Нижний новгород</Box>
		</>
	);
}

export default AboutMe;
