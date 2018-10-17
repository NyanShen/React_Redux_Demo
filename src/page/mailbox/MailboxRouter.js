import React from "react";
import {Switch, Route} from "react-router-dom";

import SendMail from "page/mailbox/inbox/SendMail";

class MailboxRouter extends React.Component{

    render() {
        return (
            <Switch>
                <Route path="/mail01.inbox" component={SendMail}/>
            </Switch>
        )
    }
}

export default MailboxRouter;