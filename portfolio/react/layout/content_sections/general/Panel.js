import React from 'react';

class Panel extends React.Component{
	
	render(){
		let {id, expanded, badgeText}  = this.props;
		let parentId = "#" + this.props.parentId
		let headingId = "heading-" + id;
		let collapseId = "collapse-" + id;
		let collapseClass = "panel-collapse collapse";
		let badgeClass = "badge";

		if (expanded)
		{
			collapseClass += " in";
		}

		if (!badgeText)
		{
			badgeClass += " hide";
		}

		return (
				<div className="panel panel-default">
				    <div 
				    		className="panel-heading"
				    		role="tab"
				    		id={headingId}>
				    		  <span className="badge danger">
						      	{badgeText}
						      </span>
						      <h4 className="panel-title">
						        <a 
						        	role="button"
						        	data-toggle="collapse"
						        	data-parent={parentId}
						        	href={collapseId}
						        	aria-expanded={expanded}
						        	aria-controls={collapseId}>
						          		{this.props.title}
						        </a>
						      </h4>

				    </div>
				   
				    <div 
				    		id={collapseId}
				    		className={collapseClass}
				    		role="tabpanel"
				    		aria-labelledby={headingId}>
					      <div className="panel-body">
					       		{this.props.children}
					      </div>
				    </div>
				</div>
		)
	}
}

export default Panel;


