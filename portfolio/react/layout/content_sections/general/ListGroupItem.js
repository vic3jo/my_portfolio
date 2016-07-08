import React from 'react';
import Glyphicon from './Glyphicon';

class ListGroupItem extends React.Component{


	render(){
		const title = this.props.title;
		let badge = this.props.badge;
		const isBadgeIcon = this.props.isBadgeIcon;
		if(isBadgeIcon)
		{
			badge = <Glyphicon iconType={badge} />
		}
		return (
			<li className="list-group-item">
				<span className="badge">
					{badge}
				</span>
				{title}
			</li>
		)
	}
}

export default ListGroupItem;