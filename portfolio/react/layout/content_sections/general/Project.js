import React from 'react';


class Project extends React.Component{
	
	shortenIfLengthLarger(text, length)
	{
		if (text.length > length)
		{
			return  text.slice(0, length) + "...";
		}
		else
		{
			return text;
		}
	}

	render(){

		let title = this.props.title;
		let course = this.props.course;
		let courseLabelClass = !course ? "hide" : "";
		let description = this.props.description;
		let languages = this.props.languages;
		let libraries = this.props.libraries;
		let repositoryUrl = this.props.repositoryUrl;

		

		description = this.shortenIfLengthLarger(
			description,
			105
		);
		
		course = this.shortenIfLengthLarger(
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
			        	<p>
			        		{description}
			        	</p>
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
