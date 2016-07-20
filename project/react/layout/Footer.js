/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Footer component of the page.
 */
import React from 'react';

export default class Footer extends React.Component {

    render ()
    {

        return (
            <footer>
                <div className="container">
                    <div className="coder col-md-offset-4 col-md-4">
                            By Victor Trejo, {2016}
                    </div>
                </div>
            </footer>
        );

    }

}