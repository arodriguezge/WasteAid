import React, { Component } from 'react'
import Ticket from './Ticket'

class TicketList extends Component {

    render() {
        return (
            <div>
                <h1>Items to be approved</h1>
                {Object.keys(this.props.items).map((index) =>{
                    if(this.props.items[index].approved === false) {
                        return <Ticket item={this.props.items[index]} key={`item ${index}`} removeItem={this.props.removeItem} editItem={this.props.editItem} approveItem={this.props.approveItem}/>
                    }
                    return ''
                })}
            </div>
        )
    }
}

export default TicketList