'use client';

import { useEffect, useState } from 'react';
import { Grid, Skeleton, Typography } from '@mui/material';
import FormSelect from '@/components/FormSelect';
import ProjectCard from '@/components/MyProjects/ProjectCard';
import { ProjectDto } from '@/types/projects';

function MyProjects() {
	const [technology, setTechnology] = useState('');
	const [projects, setProjects] = useState<ProjectDto[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const projectFilter = (project: ProjectDto) => {
		if (technology === '') return project;
		return project.tags.find((tag) => tag === technology);
	};

	useEffect(() => {
		fetch('/projects')
			.then((res) => res.json())
			.then((data) => {
				setProjects(data);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<Typography variant="h1">Мои проекты</Typography>
			<FormSelect technology={technology} setTechnology={setTechnology} />
			<Grid container spacing={3} maxWidth={700}>
				{(isLoading ? Array.from(new Array(6)) : projects?.filter(projectFilter))?.map(
					(project, index) => (
						<Grid item key={index} xs={12} md={6}>
							{project ? (
								<ProjectCard title={project.title} imgUrl={project.image} gitUrl={project.url} />
							) : (
								<Skeleton variant="rounded" width="100%" height={266} />
							)}
						</Grid>
					),
				)}
			</Grid>
		</>
	);
}

export default MyProjects;
