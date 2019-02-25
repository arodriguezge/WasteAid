import React, {Component} from 'react'
import Item from './Item'
import Footer from './Footer'
import Header from './Header'

// corresponding style file: _ticketList.scss

class ItemList extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    <h4  className="h4-5">Approved Items</h4>
                    {Object.keys(this.props.items).map((index) => {
                        if (this.props.items[index].approved === true) {
                            return <Item item={this.props.items[index]} key={`item ${index}`}/>
                        }
                        return ''
                    })}
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ItemList