import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
// import AddAnItem from './AddAnItem';
import AboutUs from './AboutUs';
import SearchArea from './SearchArea';
import RecommendedLinks from './RecommendedLinks';
// import AdminFrame from './AdminFrame';
// import NotFound from './NotFound';



class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={App} />
                    {/* <Route path="/addAnItem" component={AddAnItem} /> */}
                    <Route path="/aboutUs" component={AboutUs} />
                    <Route path="/recommendedLinks" component={RecommendedLinks} />

                    {/* <Route path="/adminFrame" component={AdminFrame} /> */}
                    <Route path="/searchArea" component={SearchArea} />
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;