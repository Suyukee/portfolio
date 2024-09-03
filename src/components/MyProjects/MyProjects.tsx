import { Grid, Typography } from '@mui/material';
import FormSelect from '@/components/FormSelect';
import ProjectCard from '@/components/MyProjects/ProjectCard';

const myProjects = [
	{
		id: '',
		title: 'Калькулятор интегрирования',
		image: '/images/project-cards/1.png',
		url: 'https://github.com/Suyukee/define-integral',
		tags: ['Typescript'],
	},
	{
		id: '',
		title: 'Игра на память',
		image: '/images/project-cards/2.png',
		url: '',
		tags: [],
	},
];

function MyProjects() {
	return (
		<>
			<Typography variant="h1">Мои проекты</Typography>
			<FormSelect />
			<Grid container spacing={3} maxWidth={700}>
				{myProjects.map((project, index) => (
					<Grid item key={index} xs={12} md={6}>
						<ProjectCard title={project.title} imgUrl={project.image} gitUrl={project.url} />
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default MyProjects;
