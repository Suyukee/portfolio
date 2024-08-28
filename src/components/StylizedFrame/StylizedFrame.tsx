import { ReactElement } from 'react';
import { Dot, Frame } from './StylizedFrameStyled';

function StylizedFrame({ children }: { children: ReactElement }) {
	return (
		<Frame>
			{children}
			{/* Переделать */}
			<Dot sx={{ top: -6, left: -6 }} />
			<Dot sx={{ top: -6, left: 'calc(50% - 4.5px)' }} />
			<Dot sx={{ top: -6, right: -6 }} />

			<Dot sx={{ top: 'calc(50% - 4.5px)', left: -6 }} />
			<Dot sx={{ top: 'calc(50% - 4.5px)', right: -6 }} />

			<Dot sx={{ bottom: -6, left: -6 }} />
			<Dot sx={{ bottom: -6, left: 'calc(50% - 4.5px)' }} />
			<Dot sx={{ bottom: -6, right: -6 }} />
		</Frame>
	);
}

export default StylizedFrame;
