import React, {Component} from 'react';
import {RouteComponentProps} from "react-router-dom";
import './style.scss';
import Header from "@components/Header";
import Account from "pages/searchPromotion/components/Account";
import DataTrend from "pages/searchPromotion/components/DataTrend";
import WaveAnalysis from "pages/searchPromotion/components/WaveAnalysis";
import UserPortrait from "pages/searchPromotion/components/UserPortrait";
import Footer from "@components/Footer";

interface IProps extends RouteComponentProps {

}


class SearchPromotion extends Component<IProps> {
	render() {
		return (
			<div className={'search-promotion-page-box'}>
				<div className="header">
					<Header />
				</div>
				<div className="content">
					<div className="account-box">
						<Account />
					</div>
					<div className="data-trend-box">
						<DataTrend />
					</div>
					<div className="wave-analysis-box">
						<WaveAnalysis />
					</div>
					<div className="user-portrait-box">
						<UserPortrait />
					</div>
				</div>
				<div className="footer">
					<Footer />
				</div>
			</div>
		);
	}
}

export default SearchPromotion;
