/**
* Author: Victor Trejo.
*
* Description: This file contains the PanelGroup component.
*/
import Panel from './Panel';
import React from 'react';

const PanelGroup = (props) => {
  return (
    <div
                 className="panel-group"
                        id={props.id}
                      role="tablist"
      aria-multiselectable="true"
    >
      {props.children}
    </div>
  );
};

PanelGroup.propTypes = {
  children: React.PropTypes.oneOfType([
    Panel,
    React.PropTypes.arrayOf(
      Panel
    ),
  ]),
  id: React.PropTypes.string.isRequired,
};

export default PanelGroup;
