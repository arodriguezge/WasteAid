import React, { Component } from 'react'
import closeButton from '../images/close-button.svg'

// corresponding style file: _registerLogIn.scss

class LogIn extends Component {

    handleSubmit = event => {
        event.preventDefault();
        // function  confirmAdmin needs to be created, then add next line:   
        // this.props.confirmAdmin(this.emailAddress.current.value, this.password.current.value)
    }

    emailAddress = React.createRef();
    password = React.createRef();

    render() {
        return (
            <div className="popup-container">
                <div className="form-box">
                    <br />
                    <div className="d-flex flex-row-reverse mr-1">
                        <img src={closeButton} className="close-btn" onClick={this.props.onReset} width="20" height="20" alt="logo" />
                    </div>
                    <br />
                    <form onSubmit={this.handleSubmit}>

                        <div>
                            <input type="email" className="form-control" placeholder="Email address" required={true} ref={this.emailAddress} />
                        </div>
                        <br />
                        <div>
                            <input type="password" className="form-control" placeholder="Password" required={true} ref={this.password} />
                        </div>
                        <br />
                        <div>
                            <button className="btn p-2 btn-success btn-block" type="submit"><b>Log in</b></button>
                        </div>
                    </form>
                    <br />

                </div>
            </div>
        )
    }
}

export default LogIn