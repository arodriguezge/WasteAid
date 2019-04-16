import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'

// corresponding style file: _registerLogin.scss

class AdminLogin extends Component {
    handleSubmit = event => {
        event.preventDefault();
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
                                <input type="email" className="form-control" placeholder="Email address" ref={this.name} />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" ref={this.name} />
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

export default AdminLogin;


