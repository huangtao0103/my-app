import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App';
import Admin from '../admin';
import Login from '../pages/login/Login';
import Buttons from '../pages/ui/button/index';
import Modals from '../pages/ui/Modals';
import Loadings from '../pages/ui/Loadings';
import Notifications from '../pages/ui/Notifications';
import Messages from '../pages/ui/Messages';
import Tab from '../pages/ui/Tab';
import Gallery from '../pages/ui/Gallery';
import Carousels from '../pages/ui/Carousels';
import FormLogin from '../pages/form/login';
import FormReg from '../pages/form/reg';
import Basic from '../pages/table/Basic';
import High from '../pages/table/High';
import NoMatch from '../pages/NoMatch';


class IRouter extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Route path='/login' component={ Login }></Route>  
                    <Route path='/' render={() => 
                        <Admin>
                            <Switch>
                                <Route path='/ui/buttons' component={Buttons}></Route>
                                <Route path='/ui/modals' component={Modals}></Route>
                                <Route path='/ui/loadings' component={Loadings}></Route>
                                <Route path='/ui/notification' component={Notifications}></Route>
                                <Route path='/ui/messages' component={Messages}></Route>
                                <Route path='/ui/tabs' component={Tab}></Route>
                                <Route path='/ui/gallery' component={Gallery}></Route>
                                <Route path='/ui/carousel' component={Carousels}></Route>
                                <Route path='/form/login' component={FormLogin}></Route>
                                <Route path='/form/reg' component={FormReg}></Route>
                                <Route path='/table/basic' component={Basic}></Route>
                                <Route path='/table/high' component={High}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>    
                        </Admin>
                    }></Route> 
                </App>
            </Router>
        );
    }
}


export default IRouter;
