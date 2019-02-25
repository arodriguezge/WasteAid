import React, {Component} from 'react'
import Ticket from './Ticket'
import Footer from './Footer'
import Header from './Header'

class TicketList extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container">
                    <h4 className="h4-5">Items to be approved</h4>
                    {Object.keys(this.props.items).map((index) => {
                        if (this.props.items[index].approved === false) {
                            return <Ticket item={this.props.items[index]} key={`item ${index}`}
                                           removeItem={this.props.removeItem} editItem={this.props.editItem}
                                           approveItem={this.props.approveItem}/>
                        }
                        return ''
                    })}
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default TicketList