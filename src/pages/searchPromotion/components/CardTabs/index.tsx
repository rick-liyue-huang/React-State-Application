import React, {Component} from 'react';
import './style.scss';
import {CardItemType} from "pages/searchPromotion/components/CardTabs/types";
import CardItem from "./CardItem";


interface IProps {
	cardData: CardItemType[];
	onChange?: (id: string) => void
}

class CardTabs extends Component<IProps> {

	handleCardItemClick = (id: string) => {
		const {onChange} = this.props;
		if (onChange) {
			onChange(id);
		}
	}

	render() {
		const {cardData} = this.props;
		return (
			<div className={'search-page-card-tabs-component-box'}>
				{
					cardData.map((cardItem: CardItemType, index: number) => (
						<CardItem
							name={cardItem.name}
							currentValue={cardItem.currentValue}
							contemporaryValue={cardItem.contemporaryValue}
							isSelected={cardItem.isSelected}
							id={cardItem.id}
							onClick={(selectedId: string) => { this.handleCardItemClick(selectedId); }}
							key={`carditem${index.toString()}`}
						/>
					))
				}
			</div>
		);
	}
}

export default CardTabs;
