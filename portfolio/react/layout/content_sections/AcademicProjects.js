import React from 'react';
import Section from './general/Section';
import ProjectList from './general/ProjectList';
import Project from './general/Project';
import {connect} from 'react-redux';

class AcademicProjects extends Section{

	getTitle(){
		return 'Academic Projects';
	}
	
	getGlyphIcon(){
		return 'glyphicon-blackboard';
	}

	getId(){
		return 'academic-projects';
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
			repositoryUrl={x.repositoryUrl}
		/>);
		
		return (
			<ProjectList>
					{projects}
			</ProjectList>
		)
	}
}

function mapStateToProps(state) {
  return { projects: state.academicProjects.projects };
}


export default connect(mapStateToProps)(AcademicProjects)