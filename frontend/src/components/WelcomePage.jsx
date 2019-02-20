import React from 'react';

class WelcomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
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