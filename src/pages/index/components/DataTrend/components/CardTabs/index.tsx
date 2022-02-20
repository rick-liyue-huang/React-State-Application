import React, {Component} from 'react';
import CardItem from "pages/index/components/DataTrend/components/CardTabs/CardItem";
import {CardItemType} from './types'
import './style.scss';

interface IProps {
	cardData: CardItemType[];
	onChange?: (id: string) => void;
}

interface IState {

}

class CardTabs extends Component<IProps, IState> {
	state = {};

	handleChange = (id: string) => {
		const {onChange} = this.props;
		if (onChange) {
			onChange(id);
		}
	}

	render() {
		const {cardData} = this.props;
		return (
			<div className={'cardtabs-component-box'}>
				{
					cardData.map((cardItem: CardItemType, index: number) => (
						<CardItem
							name={cardItem.name}
							value={cardItem.value}
							percent={cardItem.percent}
							icon={cardItem.icon}
							isSelected={cardItem.isSelected}
							id={cardItem.id}
							onClick={(selectedId: string) => {
								this.handleChange(selectedId)
							}}
							key={`carditem${index.toString()}`}
						/>
					))
				}
			</div>
		);
	}
}

export default CardTabs;
