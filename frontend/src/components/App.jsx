import React from 'react'
import Footer from './Footer'
import Header from './Header'
import WelcomePage from './WelcomePage'


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="footer-fix">
                    <WelcomePage />
                    {/* <button onClick={this.props.loadItems}>LOAD ITEMS</button> */}
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App