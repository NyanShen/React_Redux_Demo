import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import AppLayout from "page/layout/AppLayout";

class PageRouter  extends React.Component{

    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route path='/' exact render={()=> (
                        <Redirect to="/login" />
                    )}/>
                </Switch>
            </AppLayout>
        )
    }
}

export default PageRouter;