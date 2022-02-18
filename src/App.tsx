import React from 'react';
import './style.scss';

interface Props {

}

const App: React.FC<Props> = () => {
	return (
		<div className='box'>
			Hello
			<span>
				React
			</span>
		</div>
	);
};

export default App;
