//<Image src="holder.js/100px250" fluid />;

import React from 'react'
import { Image } from 'react-bootstrap'
import page from '../images/404_Page.jpg'




class NotFound extends React.Component {
    render() {

        return (

            <React.Fragment>
                <div className="container">
                    <Image src={page} className="" fluid />
                </div>
            </React.Fragment>
        )
    }
}

export default NotFound