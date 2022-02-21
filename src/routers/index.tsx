import React, {Component} from "react";
import { HashRouter as Router, withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import Index from '../pages/index/index';
import Login from '../pages/login/index';
import SearchPromotion from "pages/searchPromotion";
import App from '../App';

const allRoutes = [
	{
		path: '/index',
		exact: true,
		component: Index,
		title: ''
	},
	{
		path: '/login',
		exact: true,
		component: Login,
		title: ''
	},
	{
		path: '/searchpromotion',
		exact: true,
		component: SearchPromotion,
		title: ''
	}
];

const AppWrap = withRouter(App);

class AppRoute extends Component {
	render() {
		return (
			<div>
				<Router>
					<AppWrap>
						{
							renderRoutes(allRoutes.map((route) => ({...route, key: route.path})))
						}
					</AppWrap>
				</Router>
			</div>
		)
	}
}

export default AppRoute;
