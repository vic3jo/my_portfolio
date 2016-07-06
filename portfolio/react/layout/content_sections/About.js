import React from 'react';
import Section from './general/Section';
import {connect} from 'react-redux';

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
			<p>{this.props.about.description}</p>
		)
	}
}

function mapStateToProps(state) {
  return { about: state.about };
}


export default connect(mapStateToProps)(About);