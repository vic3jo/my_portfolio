import React from 'react';
import Header from './Header'
import Jumbotron from './Jumbotron'
import Content from './Content'
import Footer from './Footer'


class App extends React.Component{

	render()
	{
		return (<div id="page">
				<Header />
				<Jumbotron />
				<Content />
				<Footer />
			</div>)
	}
}

export default App;