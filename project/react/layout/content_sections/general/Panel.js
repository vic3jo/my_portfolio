/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Panel component.
 */
import React from 'react';

const Panel = (id, expanded, badgeText, parentId) => {
  const headingId = `heading-${id}`;
  const collapseId = `collapse-${id}`;
  let collapseClass = 'panel-collapse collapse';
  let badgeClass = 'badge danger';

  if (expanded)
  {
    collapseClass = `${collapseClass} in`;
  }

  if (!badgeText)
  {
    badgeClass = `${badgeClass} hide`;
  }

  return (
    <div className="panel panel-default">
      <div
          className="panel-heading"
               role="tab"
                 id={headingId}
      >
        <span className={badgeClass}>
          {badgeText}
        </span>
        <h4 className="panel-title">
          <a
                       role="button"
                data-toggle="collapse"
                data-parent={`#${parentId}`}
                       href={collapseId}
              aria-expanded={expanded}
              aria-controls={collapseId}
          >
            {this.props.title}
          </a>
        </h4>
      </div>
      <div
                     id={collapseId}
              className={collapseClass}
                   role="tabpanel"
        aria-labelledby={headingId}
      >
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    </div>
  );
};


Panel.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.arrayOf(
      React.PropTypes.node
    ),
  ]),
  id: React.PropTypes.string.isRequired,
  expanded: React.PropTypes.bool,
  badgeText: React.PropTypes.string.isRequired,
  parentId: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

Panel.defaultProps = { expanded: true };

export default Panel;
