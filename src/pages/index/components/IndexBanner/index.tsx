import React, {Component} from 'react';
import './style.scss'
import {Carousel} from "antd";

interface IProps {}

interface IState {}

class IndexBanner extends Component<IProps, IState> {

	state = {};

	render() {
		return (
			<div className="index-banner-component-box">
				<Carousel autoplay>
					<div>
						<img src="../../../../assets/img/index-banner1.png" alt="" />
					</div>
					<div>
						<img src="../../../../assets/img/index-banner2.png" alt="" />
					</div>
				</Carousel>
			</div>
		);
	}
}

export default IndexBanner;
