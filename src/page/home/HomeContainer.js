import React from "react";
import {connect} from "react-redux";
import {Row, Col, Button} from "antd";

import * as actions from "../../reduxModel/actions/CounterAction";
import "./index.scss";

const mapStateToProps = state => {
    return {value: state.CounterReducer.count}
};
const mapDispatchToProps =  {
    onIncrement: actions.increment,
    onDecrement: actions.decrement,
    onIncrementIfOdd: actions.incrementIfOdd
};

class Home  extends React.Component{

    render() {
        const {value, onIncrement, onDecrement, onIncrementIfOdd} = this.props;
        return (
            <div className="app-home">
                <div className="app-layout-container">
                    <Row type="flex" justify="center" className="app-layout-body">
                        <Col span={4}>
                            sidebar
                        </Col>
                        <Col span={20} className="page-panel">
                            welcome Home
                            <div className="form-btn-group">
                                <span>{value}</span>
                                <Button type="dashed" htmlType="button" onClick={onIncrement}>+</Button>
                                <Button type="dashed" htmlType="button" onClick={onDecrement}>-</Button>
                                <Button type="dashed" htmlType="button" onClick={onIncrementIfOdd}>add if odd</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
const  HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;