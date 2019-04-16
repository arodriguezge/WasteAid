import React from 'react';
import Footer from './Footer'
import Header from './Header'

const WelcomePage = () => {

    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <h2 className="h2-0">Welcome to Waste Disposal Advisor</h2>

                <div className="list-container-0">

                    <div className="list-box-0">
                        <h4>Contribute to a better future</h4>
                        <ul>
                            <li>Support recycling of your waste</li>
                            <li>Dispose of your refuse eco-friendly</li>
                            <li>Keep your ecological footprint small</li>
                            <li>Help save natural resources</li>
                        </ul>
                    </div>

                    <div className="list-box-0">
                        <h4>This little app can help you</h4>
                        <ul>
                            <li>separate your rubbish properly</li>
                            <li>use the public waste disposal system</li>
                            <li>reduce your daily waste amount</li>
                            <li>find disposal sites for special refuse</li>
                        </ul>
                    </div>

                    {/*
                            <div className="list-box-0">
                            <h4>Features</h4>
                            <ul>
                                <li>General info on disposal of domestic<br/>refuse and benefits of recycling</li>
                                <li>Growing database describing various<br/>waste items and how to get rid of them</li>
                                <li>Users can propose waste items</li>
                            </ul>
                            </div>

                            <div className="list-box-0">
                            <h4>Limitations</h4>
                            <ul>
                                <li>This app adresses private consumers and<br/>is related to domestic waste exclusively</li>
                                <li>This app is not an advisor for disposal<br/>of commercial waste</li>
                                <li>bla bla</li>
                            </ul>
                            </div>
                            */}

                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}


export default WelcomePage;