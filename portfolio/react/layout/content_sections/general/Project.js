import React from 'react';
import {shortenIfLengthLarger} from '../../../core/Utilities'

class Project extends React.Component
{
	
	render()
	{
		let {title, course, description} = this.props;
		let {languages, libraries, repositoryUrl} = this.props;
		let courseLabelClass = !course ? "hide" : "";
		
		description = shortenIfLengthLarger(
			description,
			105
		);
		
		course = shortenIfLengthLarger(
			course,
			25
		);	

		return (
			<div className="col-sm-6 col-md-4">
			    <div className="thumbnail yellow">
			      <div className="caption">
			        <h3>{title}</h3>
			        <h4 className={courseLabelClass}>
			        	Course: {course}
			        </h4>
			        
			        <div className="well well-sm">
			        	<p>{description}</p>
			        </div>
			        <p>
			        	Languages: {languages}.
			        </p>
			        <p> 
			        	Libraries: {libraries}.
			        </p>
			        <p>
			        	<a href={repositoryUrl} className="btn btn-default" role="button">
			        		Go to repository
			        	</a>
			        </p>
			      </div>
			    </div>
			</div>
		)
	}
}

export default Project;
