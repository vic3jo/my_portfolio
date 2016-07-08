import React from 'react';

class PanelGroup extends React.Component
{	
	render()
	{
		return (
			<div 
					className="panel-group"
					id={this.props.id} 
					role="tablist" 
					aria-multiselectable="true">	
					{this.props.children}
			</div>
		)
	}
}

export default PanelGroup;