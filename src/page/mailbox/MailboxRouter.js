import React from "react";
import {Switch, Route} from "react-router-dom";

import SendMail from "page/mailbox/inbox/SendMail";
import OutBox from "page/mailbox/outbox/OutBox";

class MailboxRouter extends React.Component{

    render() {
        return (
            <Switch>
                <Route path="/mail01.inbox" component={SendMail}/>
                <Route path="/mail01.outbox" component={OutBox}/>
            </Switch>
        )
    }
}

export default MailboxRouter;