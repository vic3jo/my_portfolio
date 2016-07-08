import React from 'react';

class ProjectList extends React.Component
{	
	render()
	{
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default ProjectList;