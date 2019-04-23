import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemAdmin from '../components/ItemAdmin'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import Loading from '../components/Loading'
import { fetchApprovedItems } from '../actions/ticketActions'


class ItemsList extends Component {
    componentDidMount = () => {
        const token = localStorage.getItem('token')
        this.props.fetchApprovedItems(token, this.props.history)
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
                        <h4 className="h4-5">Approved Items</h4>
                        {this.props.tickets.data.map(ticket => {
                                return <ItemAdmin item={ticket} key={`item ${ticket._id}`}/>
                        })}
                    </div>
                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ tickets }) => {
    return { tickets }
}

export default connect(mapStateToProps, { fetchApprovedItems: fetchApprovedItems })(ItemsList)