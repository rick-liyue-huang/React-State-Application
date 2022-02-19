import React, {Component} from 'react';
import {Button, DatePicker} from "antd";
import axios from 'axios';
import moment from "moment";
import './style.scss';
import Header from "@components/Header";
import Footer from '@components/Footer';
import Chart from "pages/index/components/Chart";
import PromotionCard from "pages/index/components/PromotionCard";
import ProductCard from "pages/index/components/ProductCard";
import Account from "pages/index/components/Account";
import IndexBanner from "pages/index/components/IndexBanner";
import ProductNews from "pages/index/components/ProductNews";


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
				<div className={'head-box'}>
					<Header />
				</div>
				<div className="content-box">
					<div className="left-content">
						<div className={'chart-area'}>
							<Chart />
						</div>
						<div className="promotion-card-area">
							<PromotionCard />
						</div>
						<div className="product-card-area">
							<ProductCard />
						</div>
					</div>
					<div className="right-content">
						<div className="account-area">
							<Account />
						</div>
						<div className="index-banner-area">
							<IndexBanner />
						</div>
						<div className="product-news-area">
							<ProductNews />
						</div>
					</div>
				</div>
				<div className="foot-box">
					<Footer />
				</div>
			</div>
		)
	}
}

export default Index;
