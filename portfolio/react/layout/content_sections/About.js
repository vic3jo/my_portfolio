import React from 'react';
import Section from './general/Section';
import {connect} from 'react-redux';

class About extends React.Component{

	render()
	{

		return (
			<Section 
					id="about" 
			 glyphicon="glyphicon-user"
			 title="About me">
				<p>{this.props.about.description}</p>
			</Section>
		)
	}
}

function mapStateToProps(state) {
  return { about: state.about };
}


export default connect(mapStateToProps)(About);