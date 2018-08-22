import React from "react";
import {connect} from "react-redux";
import {Row, Col, Button, Spin} from "antd";

import * as actions from "../../reduxModel/actions/CounterAction";
import {fetchMessageData} from "reduxModel/actions/MessageAction";
import {closeModal, openModal, handleConfirm} from "reduxModel/actions/ModalAction";
import MessageModal from "modals/message-modal/MessageModal";
import DetailMapping from "page/demo/detail/DetailMapping";
import PageTitle from "component/page-title/PageTitle";

const mapStateToProps = state => {
    return {
        value: state.CounterReducer.count,
        messageList: state.MessageReducer.data,
        loading: state.MessageReducer.loading,
        message: state.ModalReducer.message,
        messageModalVisible: state.ModalReducer.visible
    }
};
const mapDispatchToProps = {
    fetchMessageList: fetchMessageData,
    onIncrement: actions.increment,
    onDecrement: actions.decrement,
    onIncrementIfOdd: actions.incrementIfOdd,
    openMessageModal: openModal,
    closeMessageModal: closeModal,
    handleConfirm: handleConfirm
};

@connect(mapStateToProps, mapDispatchToProps)
class Home extends React.Component {

    componentDidMount() {
        this.props.fetchMessageList();
    }

    render() {
        const {value, onIncrement, onDecrement, onIncrementIfOdd, messageList} = this.props;
        const {message, openMessageModal, closeMessageModal, messageModalVisible, handleConfirm} = this.props;
        return (
            <div className="app-home">
                <PageTitle pageTitle="Home container"/>
                <div className="app-layout-container">
                    <Row type="flex" justify="center" className="app-layout-body">
                        <Col span={24} className="page-panel">
                            <div>welcome Home,{message}
                                <Button type="primary"
                                        htmlType="button"
                                        size="small"
                                        onClick={openMessageModal}>change user</Button>
                            </div>
                            <Spin spinning={this.props.loading} >
                                <ul>
                                    {
                                        messageList && messageList.map((message, index) => {
                                            return (
                                                <li key={index}>{message.text}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </Spin>
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

export default Home;