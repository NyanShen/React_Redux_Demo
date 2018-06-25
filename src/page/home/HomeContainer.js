import React from "react";
import {connect} from "react-redux";
import {Row, Col, Button} from "antd";

import * as actions from "../../reduxModel/actions/CounterAction";
import "./index.scss";

const mapStateToProps = state => {
    return {value: state.CounterReducer.count}
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: (count) => dispatch(actions.increment(count)),
        onDecrement: (count) => dispatch(actions.decrement(count)),
    }
};

class HomeContainer  extends React.Component{

    render() {
        const {value, onIncrement, onDecrement} = this.props;
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
                                <Button type="dashed" onClick={onIncrement}>+</Button>
                                <Button type="dashed" onClick={onDecrement}>-</Button>
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
)(HomeContainer);

export default HomeContainer;