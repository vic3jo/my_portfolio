import React from 'react';
import Section from './general/Section'

class Experience extends Section{

	getTitle(){
		return 'Experience';
	}
	
	getGlyphIcon(){
		return 'glyphicon-road';
	}

	getId(){
		return 'experience';
	}

	renderContent(){
		return (
			<div>
				<span className="glyphicon glyphicon-file"></span>see full Resume
			</div>
			
		)
	}
}

export default Experience;






