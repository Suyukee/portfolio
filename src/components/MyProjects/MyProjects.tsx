'use client';

import { Grid, Typography } from '@mui/material';
import FormSelect from '@/components/FormSelect';
import ProjectCard from '@/components/MyProjects/ProjectCard';
import { useState } from 'react';

interface Project {
	id: string;
	title: string;
	image: string;
	url: string;
	tags: string[];
}

const myProjects = [
	{
		id: '1',
		title: 'Калькулятор интегрирования',
		image: '/images/project-cards/1.png',
		url: 'https://github.com/Suyukee/define-integral',
		tags: ['', 'typescript', 'next-js'],
	},
	{
		id: '2',
		title: 'Игра на память',
		image: '/images/project-cards/2.png',
		url: 'https://github.com/Suyukee/memory-game',
		tags: ['', 'next-js'],
	},
	{
		id: '3',
		title: 'Блог',
		image: '/images/project-cards/3.png',
		url: 'https://github.com/Suyukee/blog-on-react',
		tags: ['', 'next-js'],
	},
	{
		id: '4',
		title: 'Отель Solar',
		image: '/images/project-cards/4.png',
		url: 'https://github.com/Suyukee/hotel-solar',
		tags: ['', 'next-js'],
	},
	{
		id: '5',
		title: 'Сайт портфолио',
		image: '/images/project-cards/5.png',
		url: 'https://github.com/Suyukee/portfolio',
		tags: ['', 'typescript', 'next-js', 'mui'],
	},
];

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
