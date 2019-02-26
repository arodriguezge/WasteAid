import React from 'react'
import Footer from './Footer'
import Header from './Header'

class RecommendedLinks extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="footer-fix">
                    <div className="container"></div>
                    <h1 className="display-5 ml-5 pt-4 mb-5 mt-4">More about recycling</h1>
                    <div className="container">
                        <p>
                            <ul>
                                <li>Burying litter in landfills is a waste of land and fosters the climate change by releasing methane with is a potent greenhouse gas.<br /></li>
                                <li>Incinerating rubbish in power stations is a waste of valuable raw materials and should only be done with non-recyclable refuse.<br /></li>
                                <li>Exporting rubbish into other countries, especially into developing countries, <br />
                                    is a comfortable way of getting rid of it, but appropriate, environmental-friendly disposal or recycling there is doubtful.<br /></li>
                                <li>Recycling of litter is the most sustainable and environment-friendly way of treating rubbish and should be preferred.<br /> This requires the consumers' support as they need to sort their refuse and dispose of it separately.</li>
                            </ul>
                        </p>
                    </div>


                    <h4 className="display-5 ml-5 pt-4 mb-5 mt-4">Learn more</h4>
                    <div className="container">
                        <a
                            href="https://allaboutberlin.com/guides/sorting-trash-in-germany"> https://allaboutberlin.com/guides/sorting-trash-in-germany</a>

                        <br />
                        <a href="https://www.aliadventures.com/2013/02/how-to-throw-out-your-garbage-in-germany/">https://www.aliadventures.com/2013/02/how-to-throw-out-your-garbage-in-germany/</a>
                        <br />
                        <a href="http://google.com" >http://google.com</a>
                    </div>


                </div>

                <Footer />
            </React.Fragment>
        )
    }
}

export default RecommendedLinks
