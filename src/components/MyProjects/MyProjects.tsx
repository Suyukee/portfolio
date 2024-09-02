import { Box, Typography } from '@mui/material';
import FormSelect from '../FormSelect';

const myProjects = [
	{
		id: '',
		title: 'Калькулятор интегрирования',
		image: '',
		tags: ['Typescript'],
	},
	{
		id: '',
		title: 'Игра на память',
		image: '',
		tags: [],
	},
];

function MyProjects() {
	return (
		<>
			<Typography variant="h1">Мои проекты</Typography>
			<FormSelect />
			<Box display="flex" gap={4}>
				{myProjects.map((project, index) => (
					<Box key={index}>
						{project.image}
						<Typography variant="body1">{project.title}</Typography>
					</Box>
				))}
			</Box>
		</>
	);
}

export default MyProjects;
