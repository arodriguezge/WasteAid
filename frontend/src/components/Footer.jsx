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

    // state = {
    //     isHidden: true
    // };

    // toggleHidden = () => {
    //     this.setState({
    //         isHidden: !this.state.isHidden
    //     })
    // };

    // handleSubmit = event => {
    //     event.preventDefault();
    //     event.currentTarget.reset();
    //     this.toggleHidden()
    // };

    render() {
        if (this.state.buttonClicked === 'signup') {
            return (<Register onReset={this.resetButtonClicked} />);
        }
        if (this.state.buttonClicked === 'signin') {
            return (<LogIn onReset={this.resetButtonClicked} />);
        }
        return (
            <React.Fragment>
                <br />
                <br />
                <br />
                <br />

                <div className="btn-group-sm" role="group" aria-label="Sign in and Sign up">
                    <button type="button" className="btn btn-primary" onClick={() => { this.setState({ buttonClicked: 'signup' }) }}>Register</button>
                    <button type="button" className="btn btn-primary" onClick={() => { this.setState({ buttonClicked: 'signin' }) }}>Log in</button>

                </div>
                <footer className="page-footer font-small bg-success p-0 ">
                    <div className="footer-copyright text-center py-3 text-white">
                        © 2019 Copyright: Waste Disposal Advisor

                    </div>
                </footer>

            </React.Fragment>
        )
    }
}

export default Footer