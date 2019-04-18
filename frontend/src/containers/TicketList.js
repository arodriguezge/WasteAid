import React, { Component } from 'react'
import Ticket from '../components/Ticket'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import { connect } from 'react-redux'
import Loading from "../components/Loading"
import { fetchTickets } from '../actions/index'


// corresponding style file: _ticketList.scss

class TicketList extends Component {
    componentDidMount = () => {
        this.props.fetchTickets()
    }

    render() {
        let loading
        if(this.props.items.loading) {
            loading = <Loading />
        }

        return (
            <React.Fragment>
                <HeaderAdmin />
                {/* shows loading */}
                {loading}
                <div className="container">
                    <h4 className="h4-5">Items to be approved</h4>
                    {this.props.items.data.map(item => {
                        return <Ticket item={item} key={`item ${item._id}`} />
                    })}
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ items }) => {
    return { items }
}


export default connect(mapStateToProps, { fetchTickets: fetchTickets })(TicketList)