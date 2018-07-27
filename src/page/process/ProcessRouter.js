import React from "react";
import {Switch, Route} from "react-router-dom";

import ProcessLaunch from "page/process/launch/ProcessLaunch";

class ProcessRouter extends React.Component{

    render() {
        return (
            <Switch>
                <Route path="/process.personal-task-pool" component={ProcessLaunch}/>
                <Route path="/process.launch" component={ProcessLaunch}/>
            </Switch>
        )
    }
}

export default ProcessRouter;