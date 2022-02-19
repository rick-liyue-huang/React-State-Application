import React, {Component} from 'react';
import {Button} from "antd";
import axios from 'axios';
import './style.scss';

interface Props {

}

class Index extends Component<Props> {
	componentDidMount() {
		axios.get('/test/index/try')
			.then((res) => {
				console.log('res', res.data);
			})
			.catch(err => {
				console.log(err.message);
			})
	}

	render() {
		return (
			<div className={'index-page'}>
				<div className={'middle-box'}>
					<span>hdkhdjkdh</span>
					<Button type={'primary'}>button</Button>
				</div>
			</div>
		)
	}
}

export default Index;
