import React from 'react';
import Section from './general/Section'

class AcademicProjects extends Section{

	getTitle(){
		return 'Academic Projects';
	}
	
	getGlyphIcon(){
		return 'glyphicon-blackboard';
	}

	getId(){
		return 'academic-projects';
	}

	renderContent()
	{
		return (
			<div>
					<div className="col-sm-6 col-md-4">
					    <div className="thumbnail yellow">
					      <div className="caption">
					        <h3>Anomaly-based and Misuse-based Intrusion Detection systems</h3>
					        <h4>Course: Intelligent and Secure Systems (Fall 2015)</h4>
					        
					        <div className="well">
					        	<p>This project consisted of creating Anomaly-based and Misuse-based Intrusion Detection systems using Decision Trees and Multi-Layer Perceptron Neural Network.</p>
					        </div>
					        <p>
					        	Language: Python. Libraries: PyBrain, Numpy.
					        </p>
					        <p>
					        	<a href="#" className="btn btn-default" role="button">Go to repository</a>
					        </p>
					      </div>
					    </div>
					</div>
			</div>
		)
	}
}

export default AcademicProjects;