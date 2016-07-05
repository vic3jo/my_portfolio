import React from 'react';
import Section from './general/Section'

class About extends Section{


	getTitle(){
		return 'About me';
	}

	getGlyphIcon(){
		return 'glyphicon-user';
	}

	getId(){
		return 'about';
	}

	renderContent()
	{
		return (
			<p>
				I am a web developer who is pationate about the Machine Learning topic.
			</p>
		)
	}
}

export default About;