import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
// import Form from './Form';
import AboutUs from './AboutUs';
import RecommendedLinks from './RecommendedLinks';
// import AdminFrame from './AdminFrame';
// import NotFound from './NotFound';


class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    {/* <Route path="/form" component={Form} /> */}
                    <Route path="/aboutUs" component={AboutUs} />
                    <Route path="/recommendedLinks" component={RecommendedLinks} />
                    {/* <Route path="/adminFrame" component={AdminFrame} /> */}
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;