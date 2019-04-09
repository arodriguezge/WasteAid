import React, { Component } from 'react'
import Register from './Register';
import LogIn from './LogIn';

class Footer extends Component {
    state = {
        buttonClicked: null
    }
    resetButtonClicked = () => {
        this.setState({ buttonClicked: null });
    }


    render() {
        if (this.state.buttonClicked === 'register') {
            return (<Register onReset={this.resetButtonClicked} />);
        }
        if (this.state.buttonClicked === 'logIn') {
            return (<LogIn onReset={this.resetButtonClicked} />);
        }
        return (
            <React.Fragment>


                <footer className="page-footer bg-success p-0 ">
                    <div className="footer-copyright text-center py-3 text-grey">
                        © 2019 Copyright: Waste Disposal Advisor <span className="m-1"></span>
                        <span className="pointer">
                            <small>[<a className="" onClick={() => { this.setState({ buttonClicked: 'register' }) }}> Register </a>|
                                    <a className="" onClick={() => { this.setState({ buttonClicked: 'logIn' }) }}> Log in </a>
                                ]</small>
                        </span>
                    </div>

                </footer>

            </React.Fragment>
        )
    }
}

export default Footer