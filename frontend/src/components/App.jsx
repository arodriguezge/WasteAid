import React from 'react'
//import Footer from './Footer'
//import Header from './Header'
import WelcomePage from './WelcomePage'


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <Header/> */}
                <WelcomePage/>
                {/* <button onClick={this.props.loadItems}>LOAD ITEMS</button> */}
                {/* <Footer /> */}
            </React.Fragment>
        )
    }
}

export default App