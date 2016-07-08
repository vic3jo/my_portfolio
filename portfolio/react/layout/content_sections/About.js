import React from 'react';
import Section from './general/Section';
import {connect} from 'react-redux';

class About extends React.Component{

	render()
	{

		return (
			<Section 
					id="about" 
			 iconType="user"
			 title="About me">
				<p className="pre">
					{this.props.about.description}
				</p>
			</Section>
		)
	}
}

function mapStateToProps(state) {
  return { about: state.about };
}


export default connect(mapStateToProps)(About);