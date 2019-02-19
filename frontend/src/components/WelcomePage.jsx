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
                {/* <div className="">
                    <h1 className="display-2 text-center pt-4 mb-5 mt-4">Welcome to</h1>
                    <img src={darkgrayBin} className="rounded mx-auto d-block" width="90" height="90" alt="darkgray bin" />
                    <h1 className="display-3 text-center pt-4 mb-5 mt-4">Recycle Database</h1>
                    <p className="mb-5 bg-primary"></p>
                </div> */}
                <div className="container">
                    <br/><br/><br/>
                    <h2>Welcome to Recycle Database</h2>
                    <br/><br/>

                    <div className="list-container">


                        <div className="list-box">
                            <h4>Contribute to a better future</h4>
                            <ul>
                                <li>Support recycling of your waste</li>
                                <li>Dispose of your refuse eco-friendly</li>
                                <li>Keep your ecological footprint small</li>
                                <li>Help save natural resources</li>
                            </ul>
                        </div>

                        <div className="list-box">
                            <h4>This little app can help you</h4>
                            <ul>
                                <li>separate your rubbish properly</li>
                                <li>use the public waste disposal system</li>
                                <li>reduce your daily waste amount</li>
                                <li>find disposal sites for special refuse</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default WelcomePage;