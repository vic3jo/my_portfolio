import React from 'react';


class ListGroup extends React.Component{
	
	render(){

		return (
			<ul className="list-group">
				{this.props.children}
			</ul>
		)
	}
}

export default ListGroup;