import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import AboutUs from './AboutUs'
import LearnMore from './LearnMore'
import AddItemForm from './AddItemForm'
import TicketList from '../containers/TicketList'

import ItemsList from '../containers/ItemsList'
import SearchArea from '../containers/SearchArea'

import MapSearch from './MapSearch'
import AdminLogin from './AdminLogin';


class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={WelcomePage} />
                    <Route path="/searchArea/:searchString" component={SearchArea} />
                    <Route path="/mapSearch/:rubbishCategory" component={MapSearch} />

                    <Route path="/add" component={AddItemForm} />
                    <Route path="/learnMore" component={LearnMore} />
                    <Route path="/aboutUs" component={AboutUs} />

                    <Route path="/items" component={ItemsList} />
                    <Route path="/admin/tickets" component={TicketList} />
                    <Route path="/admin/login" component={AdminLogin} />

                    {/* <Route path="/adminFrame" component={AdminFrame} /> */}
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router