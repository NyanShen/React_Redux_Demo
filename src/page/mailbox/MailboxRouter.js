import React from "react";
import {Switch, Route} from "react-router-dom";

import MailboxIndex from "page/mailbox/MailboxIndex";

class MailboxRouter extends React.Component{

    render() {
        return (
            <Switch>
                <Route path="/mail01.inbox" component={MailboxIndex}/>
            </Switch>
        )
    }
}

export default MailboxRouter;