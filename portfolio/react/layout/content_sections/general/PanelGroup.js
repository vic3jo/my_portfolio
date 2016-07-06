import React from 'react';

class PanelGroup extends React.Component{
	
	render(){
		const id = this.props.id;
		return (
			<div 
					className="panel-group"
					id={id} 
					role="tablist" 
					aria-multiselectable="true">	
					{this.props.children}
			</div>
		)
	}
}

export default PanelGroup;