import React from "react";
import {Link} from "react-router-dom";
import {Row, Col, Icon, Button} from "antd";
import "./index.scss";

class NotFound  extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="app-error">
                <div className="app-layout-container">
                    <Row type="flex" justify="center">
                        <Col span={24}>
                            <div className="client-exception">
                                <div className="icon-box">
                                    <div className="icon-body">
                                        <Icon className="icon" type="meh-o"/>
                                    </div>
                                </div>
                                <div className="icon-message">
                                    <h1>404</h1>
                                    <span>Page not found</span>
                                </div>
                                <div className="message">Sorry, page not found</div>
                                <div>
                                    <Button type="primary" htmlType="button">
                                        <Link to="/">back home</Link>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default NotFound;