import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Route,Switch} from"react-router-dom"

import GameCreate from '../Game/GameCreate';
import GamesList from '../Game/GamesList';

const Home = (props) => { 


    return (
        <div>
    
        <Switch>
            <Route exact path='/home'><GamesList token={props.token} /></Route>
            <Route exact path='/create'><GameCreate /></Route>
            <Route exact path='/'><GamesList token={props.token}/></Route>
        </Switch>
    
        </div>
    )
}

export default Home;