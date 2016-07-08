import React from 'react';


class Glyphicon extends React.Component{

	render(){
		let className = "glyphicon glyphicon-" + 
					this.props.iconType;
		return (
			<span className={className}>
				{this.props.children}
			</span>

		)
	}
}

export default Glyphicon;