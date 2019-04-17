import React, { Component } from 'react'
import Footer from './Footer'
import HeaderAdmin from './HeaderAdmin'

// corresponding style file: _registerLogin.scss

class AdminFrame extends Component {

    render() {

        return (
            <React.Fragment>
                <HeaderAdmin />
                <div className="container">
                    <h2 className="text-center pt-4 font-weight-bold">Admin Frame</h2>
                    <p className="text-center">Click in the links above to display Admin content</p>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default AdminFrame;


