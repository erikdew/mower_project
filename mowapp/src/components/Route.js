import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Lawn from '../components/Lawn/Lawn';


const RouterComponent = () => (
    <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/lawn' component={Lawn} />

    </Switch>
)

export default RouterComponent;