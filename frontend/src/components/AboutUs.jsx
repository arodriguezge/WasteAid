import React from 'react'
import Footer from './Footer'
import Header from './Header'

const AboutUs = props => {

    return (
        <React.Fragment>
            <Header />
            <div className="container">

                <h1 className="display-5 ml-5 pt-4 mb-5 mt-4">Who we are</h1>
                <div className="container">
                    <div>We care about managing your waste and how you are managing your waste, the easy
                                way. <br />
                        Getting rid of your old wallpaper? Look up where it goes. Our app “Wasteaid” <br />
                        comes in handy for just that.
                                <br /><br />
                        Technologies we used, got to work with, and learned about with in the process:
                                <br /><br />
                        Frontend: Javascript, React, Redux, Bootstrap, axios<br />
                        Backend: Node.js, Express, MongoDB, Mongoose
                                <br />
                    </div>
                </div>

            </div>
            <Footer />
        </React.Fragment>
    )
}


export default AboutUs