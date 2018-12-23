import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeScreen from '../containers/home';
import ReservationScreen from '../containers/reservation';
import ContactUsScreen from '../containers/contact';

export default () => 
    <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/reservation' component={ReservationScreen} />
        <Route path='/contact' component={ContactUsScreen} />
    </Switch>