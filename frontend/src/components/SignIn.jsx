import React, { Component } from 'react'
import closeButton from '../images/close-button.svg'
// import googleLogo from '../images/google-logo.svg'
// import facebookLogo from '../images/facebook-logo.svg'


// corresponding style file: _editTicketForm.scss

class SignIn extends Component {

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="popup-container">
                <div className="form-box">
                    <br />
                    <div className="d-flex flex-row-reverse mr-1">
                        <img src={closeButton} className="" width="20" height="20" alt="logo" />
                    </div>

                    <br />

                    {/* <div>
                        <button className="btn p-2 btn-primary btn-block" type="submit">
                            <img src={facebookLogo} className="mr-2 text-white" width="15" height="15" alt="logo" />
                            <b>Log in with Facebook</b>
                        </button>
                        <button className="btn p-2 btn-outline-dark btn-block" type="submit">
                            <img src={googleLogo} className="mr-2 text-white" width="15" height="15" alt="logo" />
                            <b>Log in with Google</b>
                        </button>

                    </div>
                    <br />
                    <hr />
                    <p className="text-center">or</p> */}

                    <form onSubmit={this.handleSubmit}>

                        <div>
                            <input type="text" className="form-control" placeholder="Email address" ref={this.name} />
                        </div>


                        <br />
                        <div>
                            <input type="text" className="form-control" placeholder="Password" ref={this.name} />
                        </div>

                        <br />
                        <div>
                            <button className="btn p-2 btn-success btn-block" type="submit"><b>Log in</b></button>

                        </div>
                    </form>
                    <br />
                    {/* <p className="text-center text-info"><b>Forgot password?</b></p>
                    <hr />
                    <p className="text-center">Don't have an account? <b className="text-info">Sign up</b></p> */}
                </div>
            </div>
        )
    }
}

export default SignIn