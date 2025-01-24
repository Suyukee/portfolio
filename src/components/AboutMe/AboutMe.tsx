import { Typography } from '@mui/material';
import {
	StyledAboutMeBox,
	StyledAboutMeItem,
	StyledAboutMeList,
	StyledContactBox,
	StyledContactsTypography,
	StyledIconSmile,
	StyledIconStar,
} from '@/components/AboutMe/AboutMeStyled';
import IconStar from '@/icons/IconStar';
import IconSmile from '@/icons/IconSmile';

const factsAboutMe = [
	'Около 1.5 лет самостоятельного обучения',
	'Бакалавриат в IT сфере',
	'2 месяца стажировки frontend-разработчиком в VVDEV & Flang',
	'3 месяца стажировки frontend-разработчиком в Neoflex',
	'Прошёл курс TypeScript + React',
];

const myContacts = ['Нижний Новгород', 'suyukee@ya.ru', '@suyukee'];

function AboutMe() {
	return (
		<StyledAboutMeBox>
			<Typography variant="h1">Обо мне</Typography>

			<div>
				<StyledAboutMeList>
					{factsAboutMe.map((fact, index) => (
						<StyledAboutMeItem key={index}>
							<StyledIconStar>
								<IconStar />
							</StyledIconStar>

							<Typography variant="subtitle1">{fact}</Typography>
						</StyledAboutMeItem>
					))}
				</StyledAboutMeList>
			</div>

			<StyledContactBox component="address">
				<StyledIconSmile>
					<IconSmile />
				</StyledIconSmile>

				{myContacts.map((contact, index) => (
					<StyledContactsTypography key={index} variant="body1">
						{contact}
					</StyledContactsTypography>
				))}
			</StyledContactBox>
		</StyledAboutMeBox>
	);
}

export default AboutMe;
