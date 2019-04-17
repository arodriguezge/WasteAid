import React, {Component} from 'react'
import { connect } from 'react-redux'

import ItemAdmin from '../components/ItemAdmin'     // replaced Item with ItemAdmin
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { fetchApprovedItems } from '../actions/index'


class ItemsList extends Component {
    componentDidMount = () => {
        this.props.fetchApprovedItems()
    }
    
    render() {
        // commented out Loading because it didn't stop after "change category" and "edit"

        let loading
        if(this.props.items.loading) {
            loading = <Loading />
        }

        return (
            <React.Fragment>
                <Header/>
                    {/* shows loading */}
                    {loading}
                    <div className="container">
                        <h4 className="h4-5">Approved Items</h4>
                        {this.props.items.data.map(item => {
                                return <ItemAdmin item={item} key={`item ${item._id}`}/>    // replaced Item with ItemAdmin
                        })}
                    </div>


                <Footer/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({items}) => {
    return { items }
}


export default connect(mapStateToProps, { fetchApprovedItems: fetchApprovedItems })(ItemsList)