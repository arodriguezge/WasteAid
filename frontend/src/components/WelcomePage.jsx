import React from 'react';
import darkgrayBin from '../images/bin-darkgray-no-label.svg';


class WelcomePage extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }


    render() {
        return (
            <React.Fragment>
                <div className="bg-primary">
                    <h1 className="display-1 text-center pt-4 mb-5 mt-4">Welcome to</h1>
                    <img src={darkgrayBin} className="rounded mx-auto d-block" width="90" height="90" alt="darkgray bin" />
                    <h1 className="display-1 text-center pt-4 mb-5 mt-4">Recycle Database</h1>
                    <p className="mb-5 bg-primary"></p>
                </div>
            </React.Fragment>
        )
    }
}

export default WelcomePage;