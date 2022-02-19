import React, {Component} from "react";
import './style.scss'
import {MenuItemInfoType} from "./types";

interface IProps {
	isActive?: boolean;
	onClick?: (url: string) => void;
	menuItemInfo: MenuItemInfoType;
}

class MenuItem extends Component<IProps> {

	handleMenuChildClick = (url: string) => {
		const {onClick} = this.props;
		if (onClick) {
			onClick(url);
		}
	}

	render() {
		const {menuItemInfo, isActive} = this.props;
		return (
			<div className={'index-menuItem-component-box'}>
				<div className="menu-item-title" onClick={() => this.handleMenuChildClick(menuItemInfo.url)}>
					{ menuItemInfo.name }
					{ menuItemInfo.menuChildren.length > 0 && (<span className={'arrow-icon'}> </span>) }
				</div>
				<div className="bottom-line"> </div>
				{ isActive && (<div className={'bottom-line-active'}> </div>) }
				{
					menuItemInfo.menuChildren.length > 0 &&
					(<div className="menu-children-box">
						{
							menuItemInfo.menuChildren.map((menuChild, index) => (
								<div key={`menu-child${index.toString()}`} className={'menu-child'}>
									<span onClick={() => this.handleMenuChildClick(menuChild.url)}>{menuChild.label}</span>
								</div>
							))
						}
					</div>)
				}

			</div>
		);
	}
}

export default MenuItem;

