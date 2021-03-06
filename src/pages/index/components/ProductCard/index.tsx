import React, {Component} from 'react';
import './style.scss';
import PRODUCTSERVICE_CONFIG from "common/constants/productService";

interface IProps {}

interface IState {}

class ProductCard extends Component<IProps, IState> {
	state = {};

	handleServiceItemClick = (url: string) => {
		window.location.href = url;
	}

	render() {
		return (
			<div className={'product-service-component-box'}>
				<div className="title">营销服务</div>
				{
					PRODUCTSERVICE_CONFIG.map((productItem, index) => (
						<div
							className="product-service-item"
							key={`index-menuItem${index.toString()}`}
							onClick={() => { this.handleServiceItemClick(productItem.link); }}
						>
							<img src={productItem.marketToolImgUrl} alt="" />
							<div className="name">{productItem.marketToolTitle}</div>
						</div>
					))
				}
			</div>
		);
	}
}

export default ProductCard;
