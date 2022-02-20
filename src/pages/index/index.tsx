import React, {Component} from 'react';
import axios from 'axios';
import moment from "moment";
import { Select, Button, DatePicker } from 'antd';
import './style.scss';
import Header from "@components/Header";
import Footer from '@components/Footer';
import PromotionCard from "pages/index/components/PromotionCard";
import ProductCard from "pages/index/components/ProductCard";
import Account from "pages/index/components/Account";
import IndexBanner from "pages/index/components/IndexBanner";
import ProductNews from "pages/index/components/ProductNews";
import DataTrend from "pages/index/components/DataTrend";
import {RouteComponentProps} from "react-router-dom";

const {Option} = Select;

// 拥有 路由的属性
interface Props extends RouteComponentProps {

}

interface IState {

}

class Index extends Component<Props, IState> {

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
		// 这里props继承了 RouteComponentProps
		const {history} = this.props;

		return (
			<div className={'index-page'}>
				<div className={'head-box'}>
					<Header />
				</div>
				<div className="content-box">
					<div className="left-content">
						<div className={'chart-area'}>
							<DataTrend />
						</div>
						<div className="promotion-card-area">
							<PromotionCard
								history={history}
							/>
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
