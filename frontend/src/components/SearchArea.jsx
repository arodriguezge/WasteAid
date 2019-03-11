import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Item from './Item'
import BinDescription from './BinDescription'
import axios from 'axios'

const BACKEND_URI = `http://localhost:5000`

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
            itemName: "",
            noResultsHintVisible: false,
            items: []
        }

    query = React.createRef()

    handleSubmit = event => {
        event.preventDefault()
        const query = this.query.current.value
        axios.get(`${BACKEND_URI}/api/items/`, {params: {
            q: query
        }})
          .then((res) => {
              if(res.status === 200) {
                if (res.data.length === 0) {
                    this.setState({
                        noResultsHintVisible: true,
                        items: []
                    })
                } else {
                    const items = res.data
                    this.setState({
                        noResultsHintVisible: false,
                        items: items,
                        wasteBinColor: ''
                    })
                }
              } else {
                console.log('ups something went wrong')
              }
          })
          event.currentTarget.reset()
    }

    binIconClick = binColor => {
        axios.get(`${BACKEND_URI}/api/items/`)
          .then((res) => {
                if (res.status === 200) {
                    let items = []
                    for (let i in res.data) {
                        if (res.data[i].bin === binColor)
                        items.push(res.data[i])
                    }
                    this.setState({
                        wasteBinColor: binColor,
                        noResultsHintVisible: false,
                        items: items
                    })
                } else {
                    console.log('ups something went wrong')  
                }
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
                            {Object.keys(this.state.items).map((item, index) => {
                                if (this.state.items[item].approved) {
                                    return <Item item={this.state.items[item]} key={`item ${index}`}/>
                                }
                                return ""
                            })}

                            {/* this.checkResults() */}
                            { this.state.noResultsHintVisible ? <NoSearchResultsHint/> : null }
                            
                        </div>
                    
                    </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default SearchArea
