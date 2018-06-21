import React from "react";
import {Row, Col} from "antd";

class AppFooter  extends React.Component{

    render() {
        return (
            <div className="app-footer">
                <div className="app-layout-container">
                    <Row type="flex" justify="center">
                        <Col span={24}>
                            <div className="copyright small">
                                版权所有@ 2018-06-21 Nyan Shen 保留所有权利 | ICP许可证号 粤B2-2018
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default AppFooter;