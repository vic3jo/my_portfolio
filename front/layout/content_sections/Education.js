import Section from './general/Section'
import React from 'react';

class Education extends Section{

	getTitle(){
		return 'Education';
	}

	getGlyphIcon(){
		return 'glyphicon-education';
	}

	getId(){
		return 'education';
	}
	

	renderContent()
	{
		return (
			<ul className="list-group">
			  <li className="list-group-item">MS. Computer Science - Rochester Institute of Technology <span className="badge">2014-2016</span></li>
			  <li className="list-group-item">BS. Telecommunications Engineering - Pontificia Universidad Catolica Madre y Maestra (PUCMM)
			  	<span className="badge">2006-2011</span>
			  </li>
			</ul>
		)
	}
}

export default Education;