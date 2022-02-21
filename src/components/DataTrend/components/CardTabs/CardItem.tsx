import React, {Component} from 'react';
import {CardItemType} from './types';
import './style.scss';


interface IProps extends CardItemType {
	onClick?: (id: string) => void;
}

interface IState {

}

class CardItem extends Component<IProps, IState> {
	state = {};

	handleClick = (id: string) => {
		const {onClick} = this.props;
		if (onClick) {
			onClick(id);
		}
	}

	render() {
		const {name, value, id, icon, percent, isSelected} = this.props;

		const cardItemStyle = isSelected ? 'carditem-component-box carditem-selected' : 'carditem-component-box';
		const nameTextStyle = isSelected ? 'name-active': 'name';
		const percentTextStyle = isSelected ? 'percent-active': 'percent';
		const valueTextStyle = isSelected ? 'value-active': 'value';
		const iconPath = isSelected ? `${icon}-selected.png` : `${icon}.png`;

		return (
			<div className={cardItemStyle} onClick={() => {this.handleClick(id)}}>
				<img className={'icon'} src={iconPath} alt=""/>
				<div className="info">
					<div className="name-percent">
						<div className={nameTextStyle}>{name}</div>
						{
							percent && (
								<div className={percentTextStyle}>{`${percent}`}</div>
							)
						}

					</div>
					<div className={valueTextStyle}>{value}</div>
				</div>
			</div>
		);
	}
}

export default CardItem;
