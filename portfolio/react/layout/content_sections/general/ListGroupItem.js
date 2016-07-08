import React from 'react';
import Glyphicon from './Glyphicon';

class ListGroupItem extends React.Component
{
	render()
	{
		var {title, badge, isBadgeIcon} = this.props;
		
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