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
import AdminFrame from './AdminFrame';

import NotFound from './NotFound';
import AddSiteForm from './AddSiteForm';
// import SitesList from '../containers/SitesList';     // has to be created yet


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

                    <Route path="/admin/login" component={AdminLogin} />

                    <Route path="/admin/frame" component={AdminFrame} />
                    {/* those two now have special header: HeaderAdmin */}
                    <Route path="/items" component={ItemsList} />
                    <Route path="/admin/tickets" component={TicketList} />

                    {/* has to be craeted yet */}
                    {/* <Route path="/admin/sites" component={TicketList} /> */}
                    <Route path="/admin/addSite" component={AddSiteForm} />

                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router