import React, {Component} from 'react'
import Ticket from '../components/Ticket'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { fetchTickets } from '../actions/index'

// corresponding style file: _ticketList.scss

class TicketList extends Component {
    componentDidMount = () => {
        this.props.fetchTickets()
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                    <div className="container">
                        <h4 className="h4-5">Items to be approved</h4>
                        {this.props.items.data.map(item => {
                                return <Ticket item={item} key={`item ${item._id}`}/>
                        })}
                    </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ items }) => {
    return { items }
}


export default connect(mapStateToProps, { fetchTickets: fetchTickets })(TicketList)