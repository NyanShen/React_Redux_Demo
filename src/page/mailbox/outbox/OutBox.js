import React from "react";

import MailboxIndex from "page/mailbox/MailboxIndex";
import HocDemo from "page/mailbox/outbox/HocDemo";

class OutBox extends React.Component {

    render() {
        return (
            <MailboxIndex>
                <HocDemo />
            </MailboxIndex>
        )
    }
}

export default OutBox;