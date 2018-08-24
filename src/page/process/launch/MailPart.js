import React from "react";
import {connect} from "react-redux";
import {Tooltip, Table, Icon, Button} from "antd";

import {visibleModal} from "reduxModel/actions/ListModalAction";
import MailSelectModal from "modals/mail-select-modal/MailSelectModal";

const mapStateToProps = state => {
    return {
        visible: state.ListModalReducer.visible
    }
};

const mapDispatchToProps = {
    visibleModal: visibleModal
};

@connect(mapStateToProps, mapDispatchToProps)
class MailPart extends React.Component {

    render() {
        const {visible, visibleModal} = this.props;
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
        const dataSource = [];
        return (
            <div className="mail-part">
                <Table
                    rowKey={record => record.id}
                    columns={columns}
                    pagination={false}
                    dataSource={dataSource}/>
                <MailSelectModal
                    visible={visible}
                    handleCancel={visibleModal}/>
            </div>
        )
    }
}

export default MailPart;