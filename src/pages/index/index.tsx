import React from 'react';
import {Button} from "antd";
import './style.scss';

const Index = () => {
	return (
		<div className={'index-page'}>
			<div className={'middle-box'}>
				this is index page
				<Button type={'primary'}>ant design</Button>
			</div>

		</div>
	);
};

export default Index;
