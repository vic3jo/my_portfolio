import React from 'react';
import Section from './general/Section'
import ListGroup from './general/ListGroup'
import ListGroupItem from './general/ListGroupItem';
import {connect} from 'react-redux';

class Education extends React.Component
{
	render()
	{
		const items = this.props.education.history
						.map( (x) => <ListGroupItem 
										key={x.id} 
										title={x.career + " - " + x.institution} 
										badge={x.startYear + "-" + x.endYear} />
						);
						
		return (
			<Section 
					id="education" 
			 iconType="education"
			 title="Education">
				<ListGroup>
					{items}
				</ListGroup>
			</Section>
		)
	}
}



function mapStateToProps(state) {
  return { education: state.education }
}


export default connect(mapStateToProps)(Education)