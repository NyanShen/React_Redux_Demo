import React from "react";
import {Row, Col} from "antd";
import {connect} from "react-redux";
import Navigator from "component/navigator/Navigator";
import Sidebar from "component/sidebar/Sidebar";
import PageTitle from "component/page-title/PageTitle";

const mapStateToProps = state => {
    return {
        menuData: state.MenuReducer.data
    }
};

class MailboxIndex extends React.Component{

    constructor(props) {
        super(props);
        this.nav = 'mail';
        this.navigator = props.menuData.navigators
    }

    render() {
        return (
            <div className="app-mail">
                <Navigator nav={this.nav}/>
                <PageTitle pageTitle={this.navigator[this.nav]}/>
                <div className="app-layout-container">
                    <Row type="flex" justify="center">
                        <Col span={4}>
                            <Sidebar nav={this.nav}/>
                        </Col>
                        <Col span={20} className="page-panel">
                            <div>mail index</div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(MailboxIndex);