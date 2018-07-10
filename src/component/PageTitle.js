import React from "react";
import {Row, Col} from "antd";

import "./index.scss";

class PageTitle extends React.Component {

    render() {
        return (
            <div className="app-page-title">
                <div className="app-layout-container">
                    <Row type="flex" justify="center">
                        <Col span={24}>
                            <span className="title">{this.props.pageTitle}</span>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default PageTitle;
