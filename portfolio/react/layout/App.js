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


export default class App extends React.Component {

    render ()
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
