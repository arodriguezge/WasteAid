import React, { Component } from 'react'
import closeButton from '../images/close-button.svg'

class SignUp extends Component {

    // handleSubmit = event => {
    //     event.preventDefault();
    // }

    render() {
        return (
            <div className="popup-container">
                <div className="form-box">
                    <br />
                    <div className="d-flex flex-row-reverse mr-1">
                        <img src={closeButton} onClick={this.props.hideHint} className="" title="Close pop-up" width="20" height="20" alt="logo" />
                    </div>
                    <br />
                    {/* <h6 className="text-center">Sign up with <span className="text-info">Facebook</span> or <span className="text-info">Google</span></h6>
                    <hr />
                    <p className="text-center">or</p> */}

                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" className="form-control" placeholder="Name" ref={this.name} />
                        </div>
                        <br />

                        <div>
                            <input type="text" className="form-control" placeholder="Email address" ref={this.name} />
                        </div>

                        {/* <br />
                        <div>
                            <input type="text" className="form-control" placeholder="Last name" ref={this.name} />
                        </div> */}
                        <br />
                        <div>
                            <input type="text" className="form-control" placeholder="Create a password" ref={this.name} />
                        </div>
                        <br />
                        <div>
                            <input type="text" className="form-control" placeholder="Repeat password" ref={this.name} />
                        </div>
                        <br />
                        <div>
                            <button className="btn btn-success btn-block p-2" type="submit"><b>Sign up</b></button>

                        </div>
                    </form>
                    <br />
                    {/* <hr />
                    <p className="text-center">Already have an account? <b className="text-info">Log in</b></p> */}
                </div>
            </div>
        )
    }
}

export default SignUp