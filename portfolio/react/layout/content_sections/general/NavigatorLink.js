import React from 'react';

class NavigatorLink extends React.Component
{	
	render()
	{
		return (
			<li className="nav">	            	
            	<a href={this.props.href}>
            		{this.props.children}
            	</a>
            </li>
		)
	}
}

export default NavigatorLink;