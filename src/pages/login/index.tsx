import React, {Component} from 'react';
import utilsIndex from '@utils/index';

interface Props {}

class Login extends Component<Props> {

	componentDidMount() {
		const id = utilsIndex.getUrlParam('id');
		console.log('id', id);
	}

	render() {
		return (
			<div>
				this is login page
			</div>
		)
	}
};

export default Login;
