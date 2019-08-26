import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './Main';
import About from './About';
import Topic from './Topic';

class Home extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topic">Topics</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path='/' component={Main}></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topic' component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>    
        );
    }
}

export default Home;