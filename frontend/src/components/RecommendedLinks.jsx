import React from 'react';
import Footer from './Footer';
import Header from './Header';



class RecommendedLinks extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }


    render() {
        return (
            <React.Fragment>
                <Header />
                <h1 className="display-1 text-center pt-4 mb-5 mt-4">This is the area for recommended links</h1>

                <Footer />
            </React.Fragment>
        )
    }
}

export default RecommendedLinks;