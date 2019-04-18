import React, { Component } from 'react'
import { connect } from 'react-redux'

import Footer from './Footer'
import Header from './Header'

import {
    login
} from '../actions/userActions'

// corresponding style file: _registerLogin.scss

class AdminLogin extends Component {
    username = React.createRef()
    password = React.createRef()

    handleSubmit = event => {
        event.preventDefault();
        this.props.login(
            this.username.current.value,
            this.password.current.value,
            this.props.history
        )
        // event.currentTarget.reset()
    }
    render() {

        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <h2 className="text-center pt-4 font-weight-bold">Admin Login</h2>
                    <form onSubmit={this.handleSubmit} >

                        <div className="m-5"></div>
                        <div className="col-md-6 col-11 pt-4 m-auto">

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username" ref={this.username} />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" ref={this.password} />
                            </div>
                            <br />
                            <div>
                                <button className="btn p-2 btn-success btn-block" type="submit"><b>Log in</b></button>
                            </div>
                            <br />

                        </div>
                    </form>

                </div>
                <Footer />
            </React.Fragment>
        )
    }
}


const mapStateToProps = ({ users }) => {
    return { users }
}


export default connect(mapStateToProps, {
    login: login
})(AdminLogin)

