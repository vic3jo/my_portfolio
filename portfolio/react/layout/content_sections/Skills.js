import React from 'react';
import Section from './general/Section';
import {connect} from 'react-redux';

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
		const items = this.props.skills.list
						.map( (x) => <li className="btn-success skill" key={x.id}>{x.label}</li>
						);
		return (
			<ul className="list-unstyled list-inline">
				{items}
			</ul>
		)
	}
}

function mapStateToProps(state) {
  return { skills: state.skills };
}


export default connect(mapStateToProps)(Skills);