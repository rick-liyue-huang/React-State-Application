import React, {Component} from 'react';
import './style.scss';
import {Button} from "antd";
import {ThemeContext} from "context/theme";

const {Consumer} = ThemeContext;

interface IProps {}

interface IState {
	status: number;
	balance: number;
	creditValue: number;
}

class Account extends Component<IProps, IState> {

	state = {
		status: 0, // 0 表示账户金未到，1 表示 已到
		balance: 0,
		creditValue: 0
	};

	/*
	renderFn = () => {
		const {status} = this.state;
		if (status === 0) {
		//	TODO 处理不同的状态
		}
	}
	*/

	// 测试
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				status: 1, // 0 表示账户金未到，1 表示 已到
				balance: 210,
				creditValue: 880
			})
		}, 2000)
	}

	render() {
		const {status, balance, creditValue} = this.state;
		return (
			<div className="account-component-box">
				<div>
					你好，
					{name}
				</div>
				<div className="examine">
					{
						status === 0 ? (
							<div className="status">开户金未到</div>
						) : (
							<div className="status-ok">开户金已到</div>
						)
					}
				</div>
				<div className="balance">
					<div>
						<div className="text">推广余额</div>
						<div className="value">{balance}</div>
					</div>
					<Button type={this.context.buttonType} size="small">充值</Button>
				</div>
				<div className="credit">
					<div>
						<div className="text">合规信用值</div>
						<div className="value">{creditValue}</div>
					</div>
					<div className="detail-text">详情</div>
				</div>
			</div>
		);
	}
}

// 使用 context
Account.contextType = ThemeContext;

export default Account;


/*
<Consumer>
	{
		(value) => (<div>{value}</div>)
	}
</Consumer>
*/
