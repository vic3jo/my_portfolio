import React from 'react';
import Section from './general/Section'
import ListGroup from './general/ListGroup'
import ListGroupItem from './general/ListGroupItem'

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
	
	getEducationHistory()
	{
		return [
			{
				id:1,
				career: "MS. Computer Science",
				institution: "Rochester Institute of Technology",
				startYear: 2014,
				endYear: 2016
			},

			{
				id:2,
				career: "BS. Telecommunications Engineering",
				institution: "Pontificia Universidad Catolica Madre y Maestra (PUCMM)",
				startYear: 2006,
				endYear: 2011
			},

		];

	}

	renderContent()
	{
		const items = this.getEducationHistory()
						.map( (x) => <ListGroupItem 
										key={x.id} 
										title={x.career + " - " + x.institution} 
										badge={x.startYear + "-" + x.endYear} />
						);
						
		return (
			<ListGroup>
				{items}
			</ListGroup>
		)
	}
}

export default Education;