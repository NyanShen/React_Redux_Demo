import React from "react";
import {Row, Col} from "antd";

class Home  extends React.Component{

    render() {
        return (
            <div className="app-home">
                <div className="app-layout-container">
                    <Row type="flex" justify="center" className="app-layout-body">
                        <Col span={4}>
                            sidebar
                        </Col>
                        <Col span={20} className="page-panel">
                            welcome Home
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Home;