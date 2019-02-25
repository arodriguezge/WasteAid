import React from 'react';
import Header from './Header';
// import SearchBar from './SearchBar';
// import BinArea from './BinArea';
import Footer from './Footer';
import Item from './Item';
import BinDescription from './BinDescription';

// corresponding style file: _searchArea.scss

class NoSearchResultsHint extends React.Component {
    render() {
        return (
            <div className="no-results-hint">
                <b>No results found.</b><br />
                You can propose the search item as a database entry.<br />
                If so, please go to "Add an Item".
            </div>
        )
    }
}

class SearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wasteBinColor: "",
            itemName: "",
            noResultsHintVisible: false
        };
        //this.binIconClick = this.binIconClick.bind(this)
    }

    name = React.createRef();

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            itemName: this.name.current.value.trim(),
            wasteBinColor: ""
        });
        event.currentTarget.reset();

        setTimeout(this.checkResults, 10)
        //this.checkResults()
    };

    /*
    // setState not allowed on this lifecycle stage
    componentDidUpdate() {
        let resultsExisting = document.getElementById("search-result");
        let binDescriptionExisting = document.getElementById("bin-description");
        if (!binDescriptionExisting) {
            if (!resultsExisting) {
                // return "no results"
                console.log("no results");
                // this.setState({
                //     noResultsHintVisible: true
                // })
            } else {
                console.log("results found");
            }
        }
    }
    */

    checkResults = () => {
        let resultsExisting = document.getElementById("search-result");
        let binDescriptionExisting = document.getElementById("bin-description");
        if (!binDescriptionExisting) {
            if (!resultsExisting) {
                //console.log("no results");
                this.setState({
                    noResultsHintVisible: true
                })
            } else {
                //console.log("results found");
                this.setState({
                    noResultsHintVisible: false
                })
            }
        }
    };


    binIconClick = binColor => {
        this.setState({
            wasteBinColor: binColor,
            itemName: "",
            noResultsHintVisible: false
        })
    };

    render() {


        return (
            <React.Fragment>
                <Header />
                <div className="footer-fix">
                    <div className="container">
                        <h4>Search Area</h4>

                        <form onSubmit={this.handleSubmit}>
                            <p>Search database by waste item name ...</p>
                            <div className="input-and-button">
                                <input type="text" className="form-control" placeholder="Type name of waste item here..."
                                    required={true} ref={this.name} />
                                <button className="btn btn-secondary" type="submit" title="start search">Start Search</button>
                            </div>
                        </form>
                        <div>
                            <p>... or click a waste bin icon for a description.</p>
                            <div className="bin-icon-container">
                                <img src="../images/bin-blue-labelled.svg" alt="wastebin icon" title="bin for paper and cardboard"
                                    onClick={() => this.binIconClick("blue")} />
                                <img src="../images/bin-green-labelled.svg" alt="wastebin icon" title="bin for green glass"
                                    onClick={() => this.binIconClick("green")} />
                                <img src="../images/bin-white-labelled.svg" alt="wastebin icon" title="bin for white glass"
                                    onClick={() => this.binIconClick("white")} />
                                <img src="../images/bin-yellow-dark-font.svg" alt="wastebin icon" title="bin for plastic, metal, Green Dot"
                                    onClick={() => this.binIconClick("yellow")} />
                                <img src="../images/bin-brown-labelled.svg" alt="wastebin icon" title="bin for bio waste"
                                    onClick={() => this.binIconClick("brown")} />
                                <img src="../images/bin-darkgray-labelled.svg" alt="wastebin icon" title="bin for residual waste"
                                    onClick={() => this.binIconClick("grey")} />
                                <img src="../images/bin-red-labelled.svg" alt="wastebin icon" title="none of the bins, separate disposal"
                                    onClick={() => this.binIconClick("none")} />
                            </div>
                        </div>
                        <div>
                            {/* search for item name */}
                            {Object.keys(this.props.items).map((index) => {
                                if (this.props.items[index].approved === true &&
                                    this.props.items[index].name === this.state.itemName) {
                                    return <Item item={this.props.items[index]} key={`item ${index}`} />
                                }
                                //console.log(this.name);
                                return ""
                            })}

                            {/* this.checkResults() */}
                            {this.state.noResultsHintVisible ? <NoSearchResultsHint /> : null}

                            {/* search specific waste bin */}
                            {this.state.wasteBinColor ? <BinDescription binColor={this.state.wasteBinColor} /> : null}

                            {Object.keys(this.props.items).map((index) => {
                                if (this.props.items[index].approved === true &&
                                    this.props.items[index].bin === this.state.wasteBinColor) {
                                    return <Item item={this.props.items[index]} key={`item ${index}`} />
                                }
                                return ""
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default SearchArea;
