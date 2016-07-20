/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Jumbotron component of the page.
 */
import Glyphicon from './content_sections/general/Glyphicon';
import ListGroup from './content_sections/general/ListGroup';
import ListGroupItem from './content_sections/general/ListGroupItem';
import React from 'react';

export default class Jumbotron extends React.Component {

    render ()
    {

        const title = 'It\'s me, Victor Trejo.';
        const imageUrl = '/static/images/gatsby.jpg';
        const description = 'Web and mobile software developer and Computer Science MS alumnus at RIT.';
        const infoItems = [
            {
                id: 1,
                title: '(585) 286-7684',
                badge: 'earphone',
                isBadgeIcon: true
            },
            {
                id: 2,
                title: 'vic3jo AT gmail DOT com',
                badge: 'envelope',
                isBadgeIcon: true
            }
        ];
        const groupItems = infoItems.map((item) => {

            return (
                <ListGroupItem
                    key={item.id}
                    title={item.title}
                    badge={item.badge}
                    isBadgeIcon={item.isBadgeIcon}
                />
            );

        });

        return (
            <div className="jumbotron">
                <div className="container">
                     <div className="thumbnail col-md-2 col-xs-4">
                        <img src={imageUrl}  />
                     </div>
                     <div className="col-md-6 col-xs-8">
                            <h1 className="cursive-style">
                                <Glyphicon iconType="glass" />
                                {title}
                            </h1>
                            <h2>
                                <p>{description}</p>
                            </h2>
                            <ListGroup>
                                {groupItems}
                            </ListGroup>
                     </div>
                </div>
            </div>
        );

    }

}
