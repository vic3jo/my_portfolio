import React from 'react';
import Section from './general/Section';
import PanelGroup from './general/PanelGroup';
import Panel from './general/Panel';
import {connect} from 'react-redux';
import {formattedDate} from '../../core/Utilities'

class Experience extends React.Component{



	render(){
		let history = this.props.experience.history;
		console.log(history);
		let historyPanels = history.map((x)=>(
			<Panel 
					      id={x.id} 
					     key={x.id}
					parentId="experience-list"
					   title={x.position + " - " + x.company} 
					   badgeText={
						   	formattedDate(x.startDate) +
						   	" - " +
						   	formattedDate(x.endDate)
					   } 
					expanded={true}>
						<p>{x.description}</p>
			</Panel>

		));
		console.log(historyPanels)

		return (
			<Section 
					id="experience" 
			 glyphicon="glyphicon-road"
			     title="Experience">
				<div>
					<PanelGroup id="experience-list">
						{historyPanels}
					</PanelGroup>
					<span className="glyphicon glyphicon-file">&nbsp;</span>
					See full Resume
				</div>				
			</Section>
		)
	}
}


function mapStateToProps(state) {
  return { experience: state.experience }
}


export default connect(mapStateToProps)(Experience)
