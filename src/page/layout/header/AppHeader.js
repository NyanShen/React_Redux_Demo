import React from "react";
import {Row, Col} from "antd";

import './index.scss';

class AppHeader  extends React.Component{

    render() {
        return (
            <div className="app-header">
                <div className="app-layout-container">
                    <Row type="flex" justify="center">
                        <Col span={24}>
                            <div className="brand-logo-wrapper">
                                <a href="#">React Reducer Demo</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default AppHeader;