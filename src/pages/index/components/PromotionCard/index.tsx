import React, {Component} from 'react';
import PromotionCardItem from "pages/index/components/PromotionCard/PromotionCardItem";
import './style.scss';

interface IProps {}

interface IState {}

const PromotionData = [
	{
		name: '搜索推广',
		cost: 1,
		budget: 100,
		btnStatus: 1,
		desc: '',
		type: 1,
	},
	{
		name: '信息流推广',
		cost: 1,
		budget: 100,
		btnStatus: 0,
		desc: '信息流推广借助大数据、用户需求定向和智能投放等技术，通过慕课APP、慕课贴吧、慕课视频等资讯流帮您触达高潜用户。',
		type: 2,
	},
	{
		name: '智能推广',
		cost: 1,
		budget: 100,
		btnStatus: 0,
		desc: '智能推广通过精准识别用户搜索需求和意图，触发行业定制化的搜索特型结果。',
		type: 2,
	},
	{
		name: '知识营销',
		cost: 1,
		budget: 100,
		btnStatus: 0,
		desc: '知识营销通过解答网民问题直达相关需求，深度影响消费决策，在长期内形成品牌与内容营销的协同效应 。',
		type: 2,
	},
]

class promotionCard extends Component<IProps, IState> {
	render() {
		return (
			<div className={'promotion-card-component-box'}>
				{
					PromotionData.map((promotionItem, index) => (
						<PromotionCardItem
							key={`product-item-${index.toString()}`}
							name={promotionItem.name}
							cost={promotionItem.cost}
							budget={promotionItem.budget}
							btnStatus={promotionItem.btnStatus}
							desc={promotionItem.desc}
							type={promotionItem.type}
						/>
					))
				}

			</div>
		);
	}
}

export default promotionCard;
