import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Promotion from 'pages/Promotion';
import PromotionForm from 'pages/Promotion/Form';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Promotion} />
                <Route path="/edit/:id" component={PromotionForm} />
                <Route path="/create" component={PromotionForm} />
            </Switch>

        </Router>
    )
}

export default Routes;