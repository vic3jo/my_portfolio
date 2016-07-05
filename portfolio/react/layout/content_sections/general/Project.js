import React from 'react';


class Project extends React.Component{
	
	render(){

		let title = this.props.title;
		let course = this.props.course;
		let description = this.props.description;
		let languages = this.props.languages;
		let libraries = this.props.libraries;

		return (
			<div className="col-sm-6 col-md-4">
			    <div className="thumbnail yellow">
			      <div className="caption">
			        <h3>{title}</h3>
			        <h4>Course: {course}</h4>
			        
			        <div className="well">
			        	<p>
			        		{description}
			        	</p>
			        </div>
			        <p>
			        	Language: {languages}. 
			        	Libraries: {libraries}.
			        </p>
			        <p>
			        	<a href="#" className="btn btn-default" role="button">
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
