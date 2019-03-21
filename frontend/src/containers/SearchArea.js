import React from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { fetchQuery } from '../actions/index'
import { fetchBin } from '../actions/index'

import BinDescription from '../components/BinDescription'


//CHECK THIS ONE

class NoSearchResultsHint extends React.Component {
    render() {
        return (
            <div className="no-results-hint2">
                <b>No results found.</b><br/>
                You can propose the search item as a database entry.<br/>
                If so, please go to "Add an Item".
            </div>
        )
    }
}

class SearchArea extends React.Component {
    state = {
        wasteBinColor: "",
        noResultsHintVisible: false
    }
    
    query = React.createRef()

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchQuery(this.query.current.value)
        if (this.props.items.data.length === 0) {
            this.setState({
                wasteBinColor: '',
                noResultsHintVisible: true
            })

            //SEE THIS!!!
            setTimeout(() => {
                this.setState({
                    noResultsHintVisible: false
                })
            }, 5000)
        } else {
            this.setState({
                wasteBinColor: '',
                noResultsHintVisible: false
            })
        }
        event.currentTarget.reset()
    }

    binIconClick = binColor => {
        this.props.fetchBin(binColor)
        this.setState({
            wasteBinColor: binColor,
            noResultsHintVisible: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                    <div className="container">
                      
                        <h4 className="h4-2">Search Area</h4>

                        <form onSubmit={this.handleSubmit}>
                            <p className="p2">Search database by waste item name ...</p>
                            <div className="input-and-button2">
                                <input type="text" className="form-control2"
                                       placeholder="Type name of waste item here..."
                                       required={true} ref={this.query}/>
                                <button className="btn btn-secondary button2" type="submit" title="start search">Start
                                    Search
                                </button>
                            </div>
                        </form>
                    
                        <div>
                            <p className="p2-1">... or click a waste bin icon for a description.</p>
                            <div className="bin-icon-container2">
                                <img className="img2" src="../images/bin2-blue-labelled.svg" alt="wastebin icon"
                                     title="bin for paper and cardboard"
                                     onClick={() => this.binIconClick("blue")}/>
                                <img className="img2" src="../images/bin2-green-labelled.svg" alt="wastebin icon"
                                     title="bin for green glass"
                                     onClick={() => this.binIconClick("green")}/>
                                <img className="img2" src="../images/bin2-white1-labelled.svg" alt="wastebin icon"
                                     title="bin for white glass"
                                     onClick={() => this.binIconClick("white")}/>
                                <img className="img2" src="../images/bin2-yellow-labelled.svg" alt="wastebin icon"
                                     title="bin for plastic, metal, Green Dot"
                                     onClick={() => this.binIconClick("yellow")}/>
                                <img className="img2" src="../images/bin2-brown1-labelled.svg" alt="wastebin icon"
                                     title="bin for bio waste"
                                     onClick={() => this.binIconClick("brown")}/>
                                <img className="img2" src="../images/bin2-grey-labelled.svg" alt="wastebin icon"
                                     title="bin for residual waste"
                                     onClick={() => this.binIconClick("grey")}/>
                                <img className="img2" src="../images/bin2-white2-labelled.svg" alt="wastebin icon"
                                     title="none of the bins, separate disposal"
                                     onClick={() => this.binIconClick("none")}/>
                            </div>
                        </div>
                    
                        <div>
                            {/* search specific waste bin */}
                            {this.state.wasteBinColor ? <BinDescription binColor={this.state.wasteBinColor}/> : null}

                            {/* search for item query */}
                            {this.props.items.data.map(item => {
                                    return <Item item={item} key={`item ${item._id}`}/>
                            })}

                            {/* non result found */}
                            {this.state.noResultsHintVisible ? <NoSearchResultsHint/> : null}
                            
                        </div>
                    
                    </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ items }) => {
    return { items }
}

export default connect(mapStateToProps, {
    fetchQuery: fetchQuery,
    fetchBin: fetchBin 
})(SearchArea)