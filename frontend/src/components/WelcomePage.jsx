import React, {Component} from 'react'
import Footer from './Footer'
import Header from './Header'
import {withRouter} from 'react-router-dom'

class SearchItemHint extends Component {
    render() {
        return (
            <div className="popup-container-welcome">
                <div className="search-item-hint-welcome">
                    <p className="close-hint-char-welcome" onClick={this.props.hideHint}
                       title="Close pop-up">&#10005;</p>
                    Please enter search item<br/>before starting the search!
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToSearchArea = this.goToSearchArea.bind(this);
        this.input = React.createRef()
    }
    
    handleChange = event => {
        this.setState({soughtItem: event.target.value.trim()})
    }

    toggleSearchItemHint = () => {
        this.setState({
            searchItemHintHidden: !this.state.searchItemHintHidden
        })
    }

    handleSubmit(event) {
        if (this.state.soughtItem && this.state.soughtItem !== "default") {
            this.props.history.push(`/searchArea/${this.state.soughtItem}`)
        } else {
            this.setState({searchItemHintHidden: false});
            event.target.reset()
        }
        event.preventDefault();
    }
    
    goToSearchArea(item) {
        this.props.history.push(`/searchArea/${item}`)
    }

    render() {
        // let listStyle = {
        //     listStyleImage: url('../images/green-dot.svg')
        // }

        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    <h1 className="h2-0 font-weight-bold">Welcome to WasteAid</h1>

                    <div className="list-container-0">

                        <div className="list-box-0">
                            <h4>This little app can help you:</h4>
                            <ul> {/* style={listStyle}*/}
                                <li>Separate your rubbish properly</li>
                                <li>Use the public waste disposal system</li>
                                <li>Reduce your daily waste amount</li>
                                <li>Find disposal sites for special refuse</li>
                            </ul>
                        </div>

                        <div className="list-box-0">
                            <h4>Contribute to a better future</h4>
                            <ul>
                                <li>Support recycling of your waste</li>
                                <li>Dispose of your refuse eco-friendly</li>
                                <li>Keep your ecological footprint small</li>
                                <li>Help save natural resources</li>
                            </ul>
                        </div>

                    </div>

                    <div className="form-box-welcome">
                        <form className="form-welcome" onSubmit={this.handleSubmit}>
                            <p className="p2-welcome-1">Which waste bin is best for my trash?</p>
                            <div className="input-and-button-welcome">
                                <input
                                    type="text"
                                       className="form-control form-welcome"
                                       placeholder="Type name of waste item here... *"
                                       required={true} ref={this.input}
                                       onChange={this.handleChange}
                                />
                                <input
                                    className="btn btn-outline-secondary button-welcome"
                                    title="start search"
                                    type="submit"
                                    value="Search"
                                />
                            </div>
                            <p className="p2-welcome-2">* e.g. napkins, dust bags, paint, batteries, ...</p>
                        </form>
                    </div>

                    {!this.state.searchItemHintHidden && <SearchItemHint hideHint={this.toggleSearchItemHint}/>}

                    <div className="image-gallery">
                        <div className="item-picture-container">
                            <img
                                onClick={(event) => this.goToSearchArea("glass", event)}
                                className="banner"
                                src="../images/brown-glass-bottles-256x190.jpg"
                                alt="brown glass bottles"
                                title="glass"
                            />
                        </div>
                        <div className="item-picture-container">
                            <img
                                onClick={(event) => this.goToSearchArea("cans", event)}
                                className="banner"
                                src="../images/cans-320x213.jpg"
                                alt="empty cans"
                                title="cans"
                            />
                        </div>
                        <div className="item-picture-container">
                            <img
                                onClick={(event) => this.goToSearchArea("batteries", event)}
                                className="banner"
                                src="../images/batteries-320x240.jpg"
                                alt="batteries"
                                title="batteries"
                            />
                        </div>
                        <div className="item-picture-container">
                            <img
                                onClick={(event) => this.goToSearchArea("kitchen refuse", event)}
                                className="banner"
                                src="../images/potatoe-peelings-227x170.jpg"
                                alt="potato peelings"
                                title="kitchen refuse"
                            />
                        </div>
                        <div className="item-picture-container">
                            <img
                                onClick={(event) => this.goToSearchArea("cardboard", event)}
                                className="banner"
                                src="../images/cardboard-box-280x215.jpg"
                                alt="cardboard box"
                                title="cardboard"
                            />
                        </div>
                        <div className="item-picture-container">
                            <img
                                onClick={(event) => this.goToSearchArea("plastic", event)}
                                className="banner"
                                src="../images/plastic-waste-256x170.jpg"
                                alt="plastic waste"
                                title="plastic"
                            />
                        </div>

                    </div>

                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default withRouter(WelcomePage)


