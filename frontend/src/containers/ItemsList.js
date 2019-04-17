import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from '../components/Item'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'
import Loading from '../components/Loading'
import { fetchApprovedItems } from '../actions/index'


class ItemsList extends Component {
    componentDidMount = () => {
        this.props.fetchApprovedItems()
    }

    render() {
        let itemsResult
        if (this.props.items.loading) {
            itemsResult = <Loading />
        }
        return (
            <React.Fragment>
                <HeaderAdmin />
                <div className="container">
                    <h4 className="h4-5">Approved Items</h4>
                    {this.props.items.data.map(item => {
                        return <Item item={item} key={`item ${item._id}`} />
                    })}
                </div>

                {/* shows loading */}
                {itemsResult}
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ items }) => {
    return { items }
}


export default connect(mapStateToProps, { fetchApprovedItems: fetchApprovedItems })(ItemsList)