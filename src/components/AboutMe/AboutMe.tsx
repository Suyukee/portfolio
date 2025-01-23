import { Typography } from '@mui/material';
import { StyledAboutMeBox, StyledContactBox, StyledContactItem } from './AboutMeStyled';
import IconLocation from '@/icons/IconLocation';
import IconMessage from '@/icons/IconMessage';
import IconTelegram from '@/icons/IconTelegram';

const factsAboutMe = [
	'Около 1.5 лет самостоятельного обучения',
	'Бакалавриат в IT сфере',
	'2 месяца стажировки frontend-разработчиком в VVDEV & Flang',
	'3 месяца стажировки frontend-разработчиком в Neoflex',
	'Прошёл курс TypeScript + React',
];

const myContacts = [
	{ icon: <IconLocation />, title: 'Нижний Новгород', color: '#FFC567' },
	{ icon: <IconMessage />, title: 'suyukee@ya.ru', color: '#C6B9FF' },
	{ icon: <IconTelegram />, title: '@suyukee', color: '#689BF7' },
];

function AboutMe() {
	return (
		<>
			<Typography variant="h1">Обо мне</Typography>
			<StyledAboutMeBox>
				<Typography component="ul" maxWidth={750} display="flex" flexDirection="column" gap={2}>
					{factsAboutMe.map((fact, index) => (
						<Typography key={index} component="li" variant="subtitle1">
							{fact}
						</Typography>
					))}
				</Typography>
			</StyledAboutMeBox>
			<StyledContactBox component="address">
				{myContacts.map((contact, index) => (
					<StyledContactItem key={index} background={contact.color} variant="body2">
						{contact.icon}
						{contact.title}
					</StyledContactItem>
				))}
			</StyledContactBox>
		</>
	);
}

export default AboutMe;
