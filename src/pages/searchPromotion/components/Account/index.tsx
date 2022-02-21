import React, {Component} from 'react';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import './style.scss'
import {Button} from "antd";

class Account extends Component {
	render() {
		return (
			<div className={'search-promotion-account-component-box'}>
				<div className="name">账户-Rick</div>
				<div className="info">
					<div className="info-item">
						<span className={'title-text'}>客户权益</span>
						<span className={'value-text'}>
							<StarFilled />
							<StarOutlined />
							<StarOutlined />
							<StarOutlined />
							<StarOutlined />
						</span>
					</div>
					<div className="info-item">
						<span className={'title-text'}>状态</span>
						<span className={'circle'} />
						<span className={'value-text'}>开户金未到</span>
					</div>
					<div className="info-item">
						<span className={'title-text'}>推广余额</span>
						<span className={'value-text'}>0</span>
						<Button size={'small'}>充值</Button>
					</div>
					<div className="info-item">
						<span className={'title-text'}>预算</span>
						<span className={'value-text'}>不限定预算</span>
					</div>
					<div className="info-item">
						<span className={'title-text'}>地域</span>
						<span className={'value-text'}>不限定地域</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Account;
