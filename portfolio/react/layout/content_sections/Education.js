import React from 'react';
import Section from './general/Section'
import ListGroup from './general/ListGroup'
import ListGroupItem from './general/ListGroupItem';
import {connect} from 'react-redux';

class Education extends Section{
	constructor()
	{
		super();
		this.state = {
			education:{
				history:[]
			}
		};
	}

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
		const items = this.props.education.history
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



function mapStateToProps(state) {
  return { education: state.education }
}


export default connect(mapStateToProps)(Education)