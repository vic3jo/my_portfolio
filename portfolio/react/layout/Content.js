import React from 'react';
import About from './content_sections/About'
import AcademicProjects from './content_sections/AcademicProjects'
import PersonalProjects from './content_sections/PersonalProjects'
import Education from './content_sections/Education'
import Experience from './content_sections/Experience'
import Skills from './content_sections/Skills'

class Content extends React.Component{

	render()
	{
		return (
			<section id="page-body" className="container">
				<About />
				<Experience />
				<Skills />
				<Education />
				<AcademicProjects />
				<PersonalProjects />
				
				
			</section>
		)
	}
}

export default Content;