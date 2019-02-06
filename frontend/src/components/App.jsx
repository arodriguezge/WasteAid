import React from 'react';

import Footer from './Footer'
import Header from './Header'
import WelcomePage from './WelcomePage'


class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }



    render() {
        return (
            <React.Fragment>


                <Header />
                <WelcomePage />
                <Footer />

            </React.Fragment>
        )
    }
}

export default App