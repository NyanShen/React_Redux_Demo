import React from "react";
import {connect} from "react-redux";
import {Row, Col, Button} from "antd";

import * as actions from "../../reduxModel/actions/CounterAction";
import {closeModal, openModal, handleConfirm} from "reduxModel/actions/ModalAction";
import MessageModal from "modals/message-modal/MessageModal";
import DetailMapping from "page/demo/detail/DetailMapping";
import UserService from "service/demo-service/UserService";
import "./index.scss";

const _userService = new UserService();

const mapStateToProps = state => {
    return {
        value: state.CounterReducer.count,
        message: state.ModalReducer.message,
        messageModalVisible: state.ModalReducer.visible
    }
};
const mapDispatchToProps = {
    onIncrement: actions.increment,
    onDecrement: actions.decrement,
    onIncrementIfOdd: actions.incrementIfOdd,
    openMessageModal: openModal,
    closeMessageModal: closeModal,
    handleConfirm: handleConfirm
};

class Home extends React.Component {

    componentDidMount() {
        _userService.getUserList().then(res => {
            console.info(res)
        });
    }

    render() {
        const {value, onIncrement, onDecrement, onIncrementIfOdd} = this.props;
        const {message, openMessageModal, closeMessageModal, messageModalVisible, handleConfirm} = this.props;
        return (
            <div className="app-home">
                <div className="app-layout-container">
                    <Row type="flex" justify="center" className="app-layout-body">
                        <Col span={24} className="page-panel">
                            welcome Home,{message}
                            <div>
                                <Button type="primary" htmlType="button"
                                        onClick={openMessageModal}>plan</Button>
                            </div>
                            <div className="form-btn-group">
                                <span>{value}</span>
                                <Button type="dashed" htmlType="button" onClick={onIncrement}>+</Button>
                                <Button type="dashed" htmlType="button" onClick={onDecrement}>-</Button>
                                <Button type="dashed" htmlType="button" onClick={onIncrementIfOdd}>add if odd</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <MessageModal title="task detail info"
                              modalVisible={messageModalVisible}
                              handleOk={handleConfirm}
                              handleCancel={closeMessageModal}>
                    <DetailMapping type="plan"/>
                </MessageModal>
            </div>
        )
    }
}

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;