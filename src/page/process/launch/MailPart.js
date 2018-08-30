import React from "react";
import {connect} from "react-redux";
import {Tooltip, Table, Icon, Button} from "antd";

import {visibleModal} from "reduxModel/actions/ListModalAction";
import MailSelectModal from "modals/mail-select-modal/MailSelectModal";
import {setSelectedMails} from "reduxModel/actions/ProcessAction";

const mapStateToProps = state => {
    return {
        visible: state.ListModalReducer.visible,
        selectedMails: state.ProcessReducer.selectedMails
    }
};

const mapDispatchToProps = {
    visibleModal: visibleModal,
    setSelectedMails: setSelectedMails
};

@connect(mapStateToProps, mapDispatchToProps)
class MailPart extends React.Component {

    handleConfirm(selectedRows) {
        const selectedMails = this.props.selectedMails;
        if (selectedRows) {
            selectedRows.forEach(row => {
                _.remove(selectedMails, row);
                selectedMails.push(row);
            })
        }
        this.props.visibleModal();
        this.props.setSelectedMails(selectedMails);
    }

    render() {
        const {visible, visibleModal, selectedMails} = this.props;
        const columns = [
            {
                title: <Tooltip title="附件"><Icon type="paper-clip"/></Tooltip>,
                dataIndex: 'hasFile',
                render: text => <Icon type={text ? 'paper-clip' : ''}/>
            },
            {
                title: '发件人',
                dataIndex: 'addressFrom'
            },
            {
                title: '主题',
                dataIndex: 'subject'
            },
            {
                title: '接收时间',
                dataIndex: 'receiveDate'
            },
            {
                title: '删除',
                dataIndex: 'deleteMail',
                render: () => {
                    return <Button type="primary" size="small">删除</Button>
                }
            },
            {
                title: <Tooltip title="添加邮件"><Icon
                    style={{fontSize: 16}}
                    type="plus-circle"
                    onClick={visibleModal}/></Tooltip>,
                dataIndex: 'addMail'
            }
        ];
        return (
            <div className="mail-part">
                <Table
                    rowKey={record => record.id}
                    columns={columns}
                    pagination={false}
                    dataSource={selectedMails}/>
                {
                    visible &&
                    <MailSelectModal
                        visible={visible}
                        handleOk={(selectedRows) => this.handleConfirm(selectedRows)}
                        handleCancel={visibleModal}/>}
            </div>
        )
    }
}

export default MailPart;