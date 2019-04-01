import React, { Component } from 'react'
import closeButton from '../images/close-button.svg'

// corresponding style file: _registerLogIn.scss

class Register extends Component {

    handleSubmit = event => {
        event.preventDefault();
        // function  addAdmin needs to be created, then add next line:
        // this.props.addAdmin(this.name.current.value, this.emailAddress.current.value, this.password.current.value, this.passwordConfirm.current.value)
    }

    name = React.createRef();
    emailAddress = React.createRef();
    password = React.createRef();
    passwordConfirm = React.createRef();

    render() {
        return (
            <div className="popup-container">
                <div className="form-box">
                    <br />
                    <div className="d-flex flex-row-reverse mr-1">
                        <img src={closeButton} onClick={this.props.onReset} className="close-btn" title="Close pop-up" width="20" height="20" alt="close" />
                    </div>
                    <br />

                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" className="form-control" placeholder="Name" required={true} ref={this.name} />
                        </div>
                        <br />
                        <div>
                            <input type="email" className="form-control" placeholder="Email address" required={true} ref={this.emailAddress} />
                        </div>

                        <br />
                        <div>
                            <input type="password" className="form-control" placeholder="Create a password" required={true} ref={this.password} />
                        </div>
                        <br />
                        <div>
                            <input type="password" className="form-control" placeholder="Repeat password" required={true} ref={this.passwordConfirm} />
                        </div>
                        <br />
                        <div>
                            <button className="btn btn-success btn-block p-2" type="submit"><b>Register</b></button>
                        </div>
                    </form>
                    <br />

                </div>
            </div>
        )
    }
}

export default Register