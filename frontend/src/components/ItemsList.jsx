import React, { Component } from 'react'
import Item from './Item'

class ItemList extends Component {

    render() {
        return (
            <div>
                <h1>Approved Items</h1>
                {Object.keys(this.props.items).map((index) =>{
                    if(this.props.items[index].approved === true) {
                        return <Item item={this.props.items[index]} key={`item ${index}`} />
                    }
                    return ''
                })}
            </div>
        )
    }
}

export default ItemList