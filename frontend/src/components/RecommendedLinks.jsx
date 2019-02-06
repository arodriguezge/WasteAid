import React from 'react'
import Footer from './Footer'
import Header from './Header'

class RecommendedLinks extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <h1 className="display-5 ml-5 pt-4 mb-5 mt-4">Recommended links about Recycling:</h1>
                <div className="container">
                    <a href="https://allaboutberlin.com/guides/sorting-trash-in-germany">https://allaboutberlin.com/guides/sorting-trash-in-germany</a>
                    <br />
                    <a href="http://google.com">http://google.com</a>
                    <br />
                    <a href="https://www.aliadventures.com/2013/02/how-to-throw-out-your-garbage-in-germany/">https://www.aliadventures.com/2013/02/how-to-throw-out-your-garbage-in-germany/</a>
                </div>


                <Footer />
            </React.Fragment>
        )
    }
}

export default RecommendedLinks