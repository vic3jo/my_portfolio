/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the main App component.
 */
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Jumbotron from './Jumbotron';
import React from 'react';
import { connect } from 'react-redux';
import loadData from '../core/Actions';

class App extends React.Component {

  componentDidMount()
  {
    this.props.onMount();
  }

  render()
  {
    return (
      <div id="page">
        <Header />
        <Jumbotron />
        <Content />
        <Footer />
      </div>
    );
  }
}

App.propTypes = { onMount: React.PropTypes.func.isRequired };

/**
* Gives the object access to the dispatch function
* throught properties.
* @param  {function} dispatch the dispatch function
* @return {object}   the updated properties object.
*/
function mapDispatchToProps(dispatch)
{
  return {
    onMount: () => {
      dispatch(loadData);
    },
  };
}

export default connect(null, mapDispatchToProps)(App);
