import React from 'react';
import Section from './general/Section';
import ProjectList from './general/ProjectList';
import Project from './general/Project';



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

	getProjects()
	{
		return [
			{
				id:1,
				title: "Anomaly-based and Misuse-based Intrusion Detection systems",
				course: "Intelligent and Secure Systems",
				description: "This project consisted of creating Anomaly-based and Misuse-based Intrusion Detection systems using Decision Trees and Multi-Layer Perceptron Neural Network.",
				languages: "Python",
				libraries:"PyBrain, Numpy"
			}
		];

	}

	renderContent()
	{
		let projects = this.getProjects().map((x)=> <Project 
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

export default PersonalProjects;