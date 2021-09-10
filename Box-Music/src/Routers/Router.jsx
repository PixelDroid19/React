import React, { Component } from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route
}   from 'react-router-dom';
import MusicBox from '../containers/ListContainer'
import WordsBox from '../components/HooKsWorld';
import NavBar from '../components/NavBar/NavBar'

export default class AppRouter extends Component {
    render(){
        return(
            <Router>
                <NavBar/>
                <Switch>
                    
                    <Route exact path="/MusicBox" component={MusicBox}/>
                    <Route exact path="/" component={WordsBox}/>
                </Switch>
            </Router>
        )
    }
}