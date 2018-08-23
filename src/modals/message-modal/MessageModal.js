import React from "react";
import {Modal} from "antd";

const MessageModal = props => {

    const {title, handleOk, handleCancel, modalVisible} = props;

    return (
        <Modal title={title}
               okText="confirm"
               cancelText="cancel"
               width={875}
               footer={null}
               onOk={handleOk}
               onCancel={handleCancel}
               visible={modalVisible}>
            {props.children}
        </Modal>
    )
};

export default MessageModal;