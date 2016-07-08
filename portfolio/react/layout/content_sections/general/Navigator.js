import React from 'react';

class Navigator extends React.Component
{	
	render()
	{
		return (
			<nav>
				<ul className="nav navbar-nav navbar-right">
				{this.props.children}
				</ul>
			</nav>
		)
	}
}

export default Navigator;