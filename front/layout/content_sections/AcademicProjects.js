import React from 'react';


class AcademicProjects extends React.Component{

	render()
	{
		return (
			<section id="academic-projects">
						<div class="row">
							
								<div class="page-header">
								  <h1 class="cursive-style"><span class="glyphicon glyphicon-blackboard"></span> Academic Projects</h1>
								  <small>Some of the things I did at RIT</small>
								</div>
								
								<div class="content yellow">
									

									<div class="row">
											
									<div class="col-sm-6 col-md-4">
									    <div class="thumbnail yellow">
									      <div class="caption">
									        <h3>Anomaly-based and Misuse-based Intrusion Detection systems</h3>
									        <h4>Course: Intelligent and Secure Systems (Fall 2015)</h4>
									        
									        <div class="well">
									        	<p>This project consisted of creating Anomaly-based and Misuse-based Intrusion Detection systems using Decision Trees and Multi-Layer Perceptron Neural Network.</p>
									        </div>
									        <p>
									        	Language: Python. Libraries: PyBrain, Numpy.
									        </p>
									        <p>
									        	<a href="#" class="btn btn-default" role="button">Go to repository</a>
									        </p>
									      </div>
									    </div>
									</div>
									


									
									<div class="col-sm-6 col-md-4">
									    <div class="thumbnail">
									      <div class="caption">
									        <h3>Image objects classifier using Bag-of-features (SIFT) and Support Vector Machines.</h3>
									        <h4>Course: Foundations of Computer Vision (Fall 2015)</h4>
									        <div class="well">
									        	<p>
										        	This project consisted of creating an Image objects classifier using Bag-of-features (SIFT) and Support Vector
													Machines.
												</p>
									        </div>
									        
											<p>
									        	Language: Python. Libraries: Scikit-learn, Numpy.
									        </p>


									        <p>
									        	<a href="#" class="btn btn-default" role="button">Go to repository</a>
									        </p>
									      </div>
									    </div>
									</div>
									


									
									<div class="col-sm-6 col-md-4">
									    <div class="thumbnail">
									      <div class="caption">
									        <h3>Content-based Recommender System for Recipes</h3>
									        <h4>Course:Introduction to Natural Language Processing (Fall 2015)</h4>
									       
									        <div class="well">
									        	<p>
										        	This project consisted of a content-based Recommender System for Recipes using ingredients information.
												</p>
									        </div>
									        <p>
									        	Language: Python. Libraries: Scikit-learn, Numpy, NLTK.
									        </p>
									        <p>
									        	<a href="#" class="btn btn-default" role="button">Go to repository</a>
									        </p>
									      </div>
									    </div>
									</div>
									
									</div>


									<div class="row">
										
												<div class="col-sm-6 col-md-4">
												    <div class="thumbnail">
												      <div class="caption">
												        <h3>Poker hands classification and Currency Exchange Rate time-series prediction</h3>
												        <h4>Course:Machine Learning and Neural Networks (Spring 2016)</h4>
												        

														<div class="well">
												        	<p>
													        	Poker hands classification and Currency Exchange Rate time-series prediction using the Neural Network architectures Multi-layer Perceptron, Radial Basis Function Network and Recurrent Neural Network.
															</p>
												        </div>
												        <p>
												        	Language: Python. Libraries: PyBrain, Numpy.
												        </p>
												        <p>
												        	<a href="#" class="btn btn-default" role="button">Go to repository</a>
												        </p>
												      </div>
												    </div>
												</div>
												

												<div class="col-sm-6 col-md-4">
												    <div class="thumbnail">
												      <div class="caption">
												        <h3>Mathematical Expression Recognizer</h3>
												        <h4><span class="glyphicon glyphicon-book"> Course :</span> Pattern Recognition</h4>
												        
														<div class="well">
												        	<p>
													        	This project consists in a system
																able to first segment a mathematical expression into series of symbols strokes,
																classify this strokes and find the relationship between them.
															</p>
												        </div>
												        <div>
												        	<label>Language:</label> Python. 
												        	
												        	<div>
												        		<label>
													        		Libraries:
													        	</label>
													        		
													        	
													        	<ul class="list-unstyled list-inline">
													        		<li>
													        			<span class="label label-success">Scikit-learn</span>
													        		</li>
													        		<li>
													        			<span class="label label-success">Numpy</span>
													        		</li>
												        		</ul> 

												        	</div>
												        	
												        	
												        	
												        </div>
												        <p>
												        	<a href="#" class="btn btn-default" role="button">Go to repository</a>
												        </p>
												      </div>
												    </div>
												</div>
												

									</div>
								</div>
							
						</div>
					</section>
		)
	}
}

export default AcademicProjects;