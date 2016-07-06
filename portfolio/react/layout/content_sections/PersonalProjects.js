import React from 'react';
import Section from './general/Section';
import ProjectList from './general/ProjectList';
import Project from './general/Project';
import {connect} from 'react-redux';


class PersonalProjects extends Section{

	getTitle(){
		return 'Personal Projects';
	}
	
	getGlyphIcon(){
		return 'glyphicon-sunglasses';
	}

	getId(){
		return 'personal-projects';
	}

	renderContent()
	{
		let projects = this.props.projects.map((x)=> <Project
			key={x.id} 
			title={x.title}
			course={x.course}
			description={x.description}
			languages={x.languages}
			libraries={x.libraries}
		/>);
		
		return (
			<ProjectList>
					{projects}
			</ProjectList>
		)
	}
}

function mapStateToProps(state) {
  return { projects: state.personalProjects.projects };
}


export default connect(mapStateToProps)(PersonalProjects)