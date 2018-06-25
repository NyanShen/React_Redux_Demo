import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import AppLayout from "page/layout/AppLayout";
import HomeContainer from "page/home/HomeContainer";
import Unauthorized from "page/error/Unauthorized";
import Forbidden from "page/error/Forbidden";
import NotFound from "page/error/NotFound";

class PageRouter  extends React.Component{

    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route path='/' exact render={()=> (
                        <Redirect to="/home" />
                    )}/>
                    <Route path="/home" component={HomeContainer}/>
                    <Route path="/unauthorized" component={Unauthorized}/>
                    <Route path="/forbidden" component={Forbidden}/>
                    <Route component={NotFound}/>
                </Switch>
            </AppLayout>
        )
    }
}

export default PageRouter;