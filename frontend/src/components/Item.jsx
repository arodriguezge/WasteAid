import React, { Component } from 'react'

class Item extends Component {
    render() {
        return (
            <div className="container">
                <h3>Item:</h3>
                <h5>{this.props.item.name}</h5>
                <p>{this.props.item.description}</p>
                <h6>{this.props.item.bin}</h6>
            </div>
        );
    }
}

export default Item