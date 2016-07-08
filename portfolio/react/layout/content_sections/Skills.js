import React from 'react';
import Section from './general/Section';
import {connect} from 'react-redux';

class Skills extends React.Component
{
	render()
	{
		const items = this.props.skills.list
						.map( (x) => <li className="btn btn-success skill" key={x.id}>
								{x.label}
							</li>
						);
		return (
			<Section 
					id="skills" 
			 iconType="plus-sign"
			 title="Skills">
				<ul className="list-unstyled list-inline skills-list">
					{items}
				</ul>
			</Section>
		)
	}
}

function mapStateToProps(state) {
  return { skills: state.skills };
}
export default connect(mapStateToProps)(Skills);