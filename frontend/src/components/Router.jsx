import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import AboutUs from './AboutUs'
import RecommendedLinks from './RecommendedLinks'
import AddItemForm from './AddItemForm'
import TicketList from '../containers/TicketList'

import ItemsList from '../containers/ItemsList'
import SearchArea from '../containers/SearchArea'


class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={WelcomePage} />
                    <Route path="/aboutUs" component={AboutUs} />
                    <Route path="/recommendedLinks" component={RecommendedLinks} />

                    <Route path="/add" component={AddItemForm} />
                    <Route path="/items" component={ItemsList} />
                    <Route path="/admin/tickets" component={TicketList} />
                    <Route path="/searchArea" component={SearchArea} />
                    
                    {/* <Route path="/adminFrame" component={AdminFrame} /> */}
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router