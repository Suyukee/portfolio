'use client';

import { useState } from 'react';
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { StyledFormControl } from './FormSelectStyled';

function FormSelect() {
	const [age, setAge] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
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
					value={age}
					label="Техногологии"
					onChange={handleChange}
				>
					<MenuItem value="">Без фильтра</MenuItem>
					<MenuItem value="Typescript">TypeScript</MenuItem>
					<MenuItem value={2}>RTK query</MenuItem>
					<MenuItem value={3}>MUI</MenuItem>
				</Select>
			</StyledFormControl>
		</Box>
	);
}

export default FormSelect;
