import { Grid, Typography } from '@mui/material';
import {
	StyledAdditionalStackItem,
	StyledAdditionalStackList,
	StyledIconStar,
	StyledMainStackItem,
	StyledMainStackList,
} from '@/components/StackSection/StackSectionStyled';
import IconTypescript from '@/icons/IconTypescript';
import IconReact from '@/icons/IconReact';
import IconNextjs from '@/icons/IconNextjs';
import IconRTKQuery from '@/icons/IconRTKQuery';

const mainStack = [
	['TypeScript', <IconTypescript />],
	['React', <IconReact />],
	['Next.js', <IconNextjs />],
	['RTK query', <IconRTKQuery />],
];
const additionalStack = ['Material UI', 'React-hook-form', 'Git', 'i18next', 'use-query-param'];

function StackSection() {
	return (
		<>
			<Typography variant="h1">Мой стек-технологий</Typography>

			<StyledMainStackList>
				<Grid container spacing={2}>
					{mainStack.map((technology, index) => (
						<Grid item key={index} xs={6} sm={3}>
							<StyledMainStackItem>
								{technology[1]}
								<Typography variant="subtitle1" noWrap>
									{technology[0]}
								</Typography>
							</StyledMainStackItem>
						</Grid>
					))}
				</Grid>
			</StyledMainStackList>

			<StyledAdditionalStackList>
				{additionalStack.map((technology, index) => (
					<StyledAdditionalStackItem key={index}>
						<StyledIconStar />
						<Typography variant="subtitle1">{technology}</Typography>
					</StyledAdditionalStackItem>
				))}
			</StyledAdditionalStackList>
		</>
	);
}

export default StackSection;
