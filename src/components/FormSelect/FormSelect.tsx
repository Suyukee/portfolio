import { Box, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { StyledFormControl } from '@/components/FormSelect/FormSelectStyled';
import { Dispatch, SetStateAction } from 'react';

type FormSelectProps = {
	technology: string;
	setTechnology: Dispatch<SetStateAction<string>>;
};

function FormSelect({ technology, setTechnology }: FormSelectProps) {
	const handleChange = (event: SelectChangeEvent) => {
		setTechnology(event.target.value as string);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<StyledFormControl fullWidth>
				<InputLabel id="demo-simple-select-label">
					<Typography id="demo-simple-select-label" variant="body1">
						Техногологии
					</Typography>
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={technology}
					label="Техногологии"
					onChange={handleChange}
				>
					<MenuItem value="">Без фильтра</MenuItem>
					<MenuItem value="typescript">TypeScript</MenuItem>
					<MenuItem value="next-js">Next.js</MenuItem>
					<MenuItem value="tanstack-query">TanStack query</MenuItem>
					<MenuItem value="redux">Redux toolkit</MenuItem>
					<MenuItem value="rtk-query">RTK query</MenuItem>
					<MenuItem value="mui">MUI</MenuItem>
					<MenuItem value="react-hook-form">React-Hook-Form</MenuItem>
				</Select>
			</StyledFormControl>
		</Box>
	);
}

export default FormSelect;
