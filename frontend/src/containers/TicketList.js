import React, { Component } from 'react'
import Ticket from '../components/Ticket'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import { connect } from 'react-redux'
import Loading from "../components/Loading"
import { fetchTickets } from '../actions/ticketActions'


// corresponding style file: _ticketList.scss

class TicketList extends Component {
    componentDidMount = () => {
        const token = localStorage.getItem('token')
        this.props.fetchTickets(token, this.props.history)
    }

    render() {
        let loading
        if(this.props.tickets.loading) {
            loading = <Loading />
        }

        return (
            <React.Fragment>
                <HeaderAdmin history={this.props.history}/>
                {/* shows loading */}
                {loading}
                <div className="container">
                    <h4 className="h4-5">Items to be approved</h4>
                    {this.props.tickets.data.map(ticket => {
                        return <Ticket item={ticket} key={`item ${ticket._id}`} />
                    })}
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ tickets }) => {
    return { tickets }
}


export default connect(mapStateToProps, { fetchTickets: fetchTickets })(TicketList)