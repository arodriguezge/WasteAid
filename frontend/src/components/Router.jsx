import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WelcomePage from './WelcomePage'
import AboutUs from './AboutUs'
import LearnMore from './LearnMore'
import AddItemForm from './AddItemForm'
import TicketList from '../containers/TicketList'

import ItemsList from '../containers/ItemsList'
import SearchArea from '../containers/SearchArea'

import MapSearch from './MapSearch'
import AdminLogin from './AdminLogin';
import AdminFrame from './AdminFrame';

//import NotFound from './NotFound';

const Root = (props) => {
    const {history, location} = props
    return (
        <Router history={history} location={location}>

            <div>

                <Route exact path="/" component={WelcomePage}/>
                <Route path="/searchArea/:searchString" component={SearchArea}/>
                <Route path="/mapSearch/:rubbishCategory" component={MapSearch}/>

                <Route path="/add" component={AddItemForm}/>
                <Route path="/learnMore" component={LearnMore}/>
                <Route path="/aboutUs" component={AboutUs}/>

                <Route history={history} location={location} path="/admin/login" component={AdminLogin}/>

                <Route path="/admin/frame" component={AdminFrame}/>
                {/* those two now have special header: HeaderAdmin */}
                <Route path="/items" component={ItemsList}/>
                <Route path="/admin/tickets" component={TicketList}/>

                {/* <Route component={NotFound} /> */}

            </div>

        </Router>
    )
}

export default Root