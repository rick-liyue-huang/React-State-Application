import React, {Component} from 'react';
import {Empty} from "antd";
import axios from "axios";

interface IProps {

}

class UserPortrait extends Component<IProps> {
	state = {
		isEmpty: true
	};

	/*
	componentDidMount() {
		axios.get('/ad/ddd').then(() => {
			this.setState({
				isEmpty: false
			})
		})
	}
	*/

	render() {
		const {isEmpty} = this.state;
		return (
			<div className={'user-portrait-component-box'}>
				{
					isEmpty ?
						(
							<Empty
								description={'no user portrait'}
							/>
						) :
						(<div>user info </div>)
				}
			</div>
		);
	}
}

export default UserPortrait;
