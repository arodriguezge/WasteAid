import React, { Component } from 'react'
import EditTicket from './EditTicket'

class Ticket extends Component {
    state = {
        isHidden: true 
    }

    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div className="container">
                <h5>{this.props.item.name}</h5>
                <p>{this.props.item.description}</p>
                <h6>{this.props.item.bin}</h6>
                <button onClick={() => {this.props.approveItem(this.props.item._id)}}>approve</button>
                <button onClick={this.toggleHidden.bind(this)}>edit</button>
                {!this.state.isHidden && <EditTicket item={this.props.item} editItem={this.props.editItem} toggleHidden={this.toggleHidden}/>}
                <button onClick={() => {this.props.removeItem(this.props.item._id)}}>remove</button>
            </div>
        );
    }
}

export default Ticket