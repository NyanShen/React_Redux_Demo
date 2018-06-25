import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import AppLayout from "page/layout/AppLayout";
import HomeContainer from "page/home/HomeContainer";
import Unauthorized from "page/error/Unauthorized";
import Forbidden from "page/error/Forbidden";
import NotFound from "page/error/NotFound";
import PrivateRoute from "page/PrivateRoute";
import LoginUser from "service/login-service/LoginUser";

const _loginUser = new LoginUser();

class PageRouter  extends React.Component{

    constructor(props) {
        super(props);
        this.hasLogin = _loginUser.hasLogin();
    }
    redirectDefault() {
        const defaultRoute = <Redirect to="/home"/>;
        const loginRoute = <Redirect to="/login"/>
        return this.hasLogin ? defaultRoute : loginRoute;
    }
    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route path='/' exact render={()=> this.redirectDefault()}/>
                    <PrivateRoute path="/home" component={HomeContainer}/>
                    <Route path="/unauthorized" component={Unauthorized}/>
                    <Route path="/forbidden" component={Forbidden}/>
                    <Route component={NotFound}/>
                </Switch>
            </AppLayout>
        )
    }
}

export default PageRouter;