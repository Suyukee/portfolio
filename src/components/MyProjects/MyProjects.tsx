'use client';

import { Grid, Typography } from '@mui/material';
import FormSelect from '@/components/FormSelect';
import ProjectCard from '@/components/MyProjects/ProjectCard';
import { useState } from 'react';
import { myProjects } from './Projects';

interface Project {
	id: string;
	title: string;
	image: string;
	url: string;
	tags: string[];
}

function MyProjects() {
	const [technology, setTechnology] = useState('');

	const projectFilter = (project: Project) => {
		if (technology === '') return project;
		return project.tags.find((tag) => tag === technology);
	};

	return (
		<>
			<Typography variant="h1">Мои проекты</Typography>
			<FormSelect technology={technology} setTechnology={setTechnology} />
			<Grid container spacing={3} maxWidth={700}>
				{myProjects.filter(projectFilter).map((project) => (
					<Grid item key={project.id} xs={12} md={6}>
						<ProjectCard title={project.title} imgUrl={project.image} gitUrl={project.url} />
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default MyProjects;
