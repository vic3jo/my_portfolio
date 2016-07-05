import React from 'react';


class ListGroupItem extends React.Component{


	render(){
		const title = this.props.title;
		const badge = this.props.badge;
		return (
			<li className="list-group-item">
				{title}
				<span className="badge">
					{badge}
				</span>
			</li>
		)
	}
}

export default ListGroupItem;