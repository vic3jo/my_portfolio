import React from 'react';
import Section from './general/Section';
import PanelGroup from './general/PanelGroup';
import Panel from './general/Panel';

class Experience extends Section{

	getTitle(){
		return 'Experience';
	}
	
	getGlyphIcon(){
		return 'glyphicon-road';
	}

	getId(){
		return 'experience';
	}

	renderContent(){
		return (
			<div>
				<PanelGroup id="experience-list">
					<Panel id="one" parentId="experience-list" title="Experience At My company.com" expanded={true} >
						<p>I did great things here</p>
					</Panel>
					<Panel id="two" parentId="experience-list" title="Experience At My otherCompany.com" expanded={false} />
				</PanelGroup>
				<span className="glyphicon glyphicon-file"> </span> see full Resume
			</div>
			
		)
	}
}

export default Experience;






