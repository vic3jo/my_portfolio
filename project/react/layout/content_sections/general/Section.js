/**
* Author: Victor Trejo.
*
* Description: This file contains the Section component.
*/
import Glyphicon from './Glyphicon';
import React from 'react';

export default class Section extends React.Component
{

    render ()
    {

        const {id, title, iconType} = this.props;

        return (
            <section id={id}>
                <div className="row">
                        <div className="page-header col-sm-12">
                            <h1 className="cursive-style">
                                <Glyphicon iconType={iconType}/>
                                <span className="section-title">{title}</span>
                            </h1>
                        </div>
                        <div className="content col-sm-12">
                            {this.props.children}
                        </div>
                </div>
            </section>
        );

    }

}

Section.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.node,
        React.PropTypes.arrayOf(
            React.PropTypes.node
        )
    ]),
    title: React.PropTypes.string.isRequired,
    iconType: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
};
