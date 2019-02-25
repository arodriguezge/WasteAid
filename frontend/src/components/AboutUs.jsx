import React from 'react'
import Footer from './Footer'
import Header from './Header'

class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="footer-fix">


                    <div className="container"></div>
                    <h1 className="display-5 ml-5 pt-4 mb-5 mt-4">Who we are</h1>
                    <div className="container">
                        <p>We care about managing your waste and how you are managing your waste, the easy way. <br />
                            Getting rid of your old wallpaper? Look up where it goes. Our app “Recycling Database” <br />
                            comes in handy for just that.
                    <br /><br />
                            Technologies we used, got to work with, and learned about with in the process:
                    <br /><br />
                            Frontend: React, Bootstrap, axios<br />
                            Backend: Express, MongoDB, Mongoose
                    <br />
                        </p>
                    </div>
                </div>


                <Footer />
            </React.Fragment>
        )
    }
}

export default AboutUs