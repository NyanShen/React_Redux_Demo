import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import AppLayout from "page/layout/AppLayout";
import Home from "page/home/Home";

class PageRouter  extends React.Component{

    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route path='/' exact render={()=> (
                        <Redirect to="/home" />
                    )}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </AppLayout>
        )
    }
}

export default PageRouter;