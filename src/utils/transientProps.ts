import { CreateStyled } from '@emotion/styled';

export const transientProps: Parameters<CreateStyled>[1] = {
	shouldForwardProp: (propName: string) => {
		if (propName === 'as') return false;
		if (propName.startsWith('$')) return false;

		return true;
	},
};

export default transientProps;
