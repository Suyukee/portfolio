import { Button } from '@mui/material';
import {
	StyledImageProjectCard,
	StyledLinkProjectCard,
	StyledTypographyProjectCard,
} from './ProjectCardStyled';

type ProjectCardProps = {
	title: string;
	imgUrl: string;
	gitUrl: string;
};

function ProjectCard({ title, imgUrl, gitUrl }: ProjectCardProps) {
	return (
		<StyledLinkProjectCard href={gitUrl} variant="contained" color="secondary">
			<StyledImageProjectCard width={2000} height={300} src={imgUrl} alt={title} />
			<StyledTypographyProjectCard variant="body1">{title}</StyledTypographyProjectCard>
		</StyledLinkProjectCard>
	);
}

export default ProjectCard;
