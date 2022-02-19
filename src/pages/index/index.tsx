import React, {Component} from 'react';
import {Button, DatePicker} from "antd";
import axios from 'axios';
import moment from "moment";
import './style.scss';

interface Props {

}

class Index extends Component<Props> {

	handleDateChange = (date: moment.Moment | null) => {
		console.log(moment(date).unix());
	}

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
				<DatePicker onChange={this.handleDateChange} />
			</div>
		)
	}
}

export default Index;
