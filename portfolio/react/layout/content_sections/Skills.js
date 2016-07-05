import React from 'react';
import Section from './general/Section'

class Skills extends Section{

	getTitle(){
		return 'Skills';
	}
	
	getGlyphIcon(){
		return 'glyphicon-plus-sign';
	}

	getId(){
		return 'skills';
	}


	renderContent()
	{
		return (
			<ul>
				<li>Skill 1</li>
				<li>Skill 2</li>
			</ul>
		)
	}
}

export default Skills;