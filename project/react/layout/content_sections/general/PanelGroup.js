/**
* Author: Victor Trejo.
*
* Description: This file contains the PanelGroup component.
*/
import Panel from './Panel';
import React from 'react';

export default class PanelGroup extends React.Component
{

    render ()
    {

        return (
            <div
                               className="panel-group"
                                      id={this.props.id}
                                    role="tablist"
                    aria-multiselectable="true"
            >
                    {this.props.children}
            </div>
        );

    }

}

PanelGroup.propTypes = {
    children: React.PropTypes.oneOfType([
        Panel,
        React.PropTypes.arrayOf(
            Panel
        )
    ]),
    id: React.PropTypes.string.isRequired
};
