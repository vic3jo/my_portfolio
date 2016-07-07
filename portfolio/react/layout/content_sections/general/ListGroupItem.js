import React from 'react';


class ListGroupItem extends React.Component{


	render(){
		const title = this.props.title;
		const badge = this.props.badge;
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