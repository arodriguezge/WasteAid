import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import BinArea from './BinArea'
import Footer from './Footer'


class SearchArea extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }


    render() {
        return (
            <React.Fragment>
                <Header />
                <SearchBar />
                <BinArea />




                <Footer />
            </React.Fragment>
        )
    }
}

export default SearchArea
