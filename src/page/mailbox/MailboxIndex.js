import React from "react";
import {Row, Col} from "antd";
import Navigator from "component/navigator/Navigator";

class MailboxIndex extends React.Component{

    constructor(props) {
        super(props);
        this.nav = 'mail';
    }

    render() {
        return (
            <div className="app-mail">
                <Navigator nav={this.nav}/>
                <div className="app-layout-container">
                    <Row type="flex" justify="center">
                        <Col span={4}>

                        </Col>
                        <Col span={20}>
                            <div>mail index</div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default MailboxIndex;