import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import { withRouter } from 'react-router-dom'


class SearchItemHint extends Component {
    render() {
        return (
            <div className="popup-container-welcome">
                <div className="search-item-hint-welcome">
                    <p className="close-hint-char-welcome" onClick={this.props.hideHint} title="Close pop-up">&#10005;</p>
                    Please enter search item<br />before starting the search!
                </div>
            </div>
        )
    }
}


class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soughtItem: "default",
            searchItemHintHidden: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.input = React.createRef()
    }


    handleChange = event => {
        this.setState({ soughtItem: event.target.value })
    };


    toggleSearchItemHint = () => {
        this.setState({
            searchItemHintHidden: !this.state.searchItemHintHidden
        })
    };


    render() {
        const Button = withRouter(({ history }) => (
            <button
                className="btn btn-secondary button2"
                type='button'
                title="start search"
                onClick={() => {
                    if (this.state.soughtItem !== "default") {
                        history.push(`/searchArea/${this.state.soughtItem}`)
                    } else {
                        this.setState({ searchItemHintHidden: false })
                    }
                }}
            >
                Search
            </button>
        ));


        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <h1 className="h2-0 font-weight-bold">Welcome to Wasteaid</h1>

                    <div className="list-container-0">

                        <div className="list-box-0">
                            <h4>Contribute to a better future</h4>
                            <ul>
                                <li>Support recycling of your waste</li>
                                <li>Dispose of your refuse eco-friendly</li>
                                <li>Keep your ecological footprint small</li>
                                <li>Help save natural resources</li>
                            </ul>
                        </div>

                        <div className="list-box-0">
                            <h4>This little app can help you</h4>
                            <ul>
                                <li>separate your rubbish properly</li>
                                <li>use the public waste disposal system</li>
                                <li>reduce your daily waste amount</li>
                                <li>find disposal sites for special refuse</li>
                            </ul>
                        </div>

                        {/*
                            <div className="list-box-0">
                            <h4>Features</h4>
                            <ul>
                                <li>General info on disposal of domestic<br/>refuse and benefits of recycling</li>
                                <li>Growing database describing various<br/>waste items and how to get rid of them</li>
                                <li>Users can propose waste items</li>
                            </ul>
                            </div>

                            <div className="list-box-0">
                            <h4>Limitations</h4>
                            <ul>
                                <li>This app adresses private consumers and<br/>is related to domestic waste exclusively</li>
                                <li>This app is not an advisor for disposal<br/>of commercial waste</li>
                                <li>bla bla</li>
                            </ul>
                            </div>
                            */}

                    </div>
                    <div className="form-box-welcome">
                        <form className="form-welcome">
                            <p className="p2-welcome">Which waste bin is best for my trash?</p>
                            <div className="input-and-button-welcome">
                                <input type="text" className="form-control-welcome"
                                    placeholder="Type name of waste item here..."
                                    required={true} ref={this.input}
                                    onChange={this.handleChange}
                                />
                                <Button />
                            </div>
                        </form>
                    </div>

                    {!this.state.searchItemHintHidden && <SearchItemHint hideHint={this.toggleSearchItemHint} />}

                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default WelcomePage;


