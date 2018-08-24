import React from "react";
import {connect} from "react-redux";
import {Tooltip, Table, Icon, Button, Modal} from "antd";

import {fetchMailData} from "reduxModel/actions/MailAction";
import AppPagination from "component/pagination/AppPagination";

const mapStateToProps = state => {
    return {
        dataSource: state.MailReducer.data
    }
};
const mapDispatchToProps = {
    fetchMailList: fetchMailData
};

@connect(mapStateToProps, mapDispatchToProps)
class MailSelectModal extends React.Component {

    componentDidMount() {
        this.props.fetchMailList({page: 0, size: 10});
    }

    handleChangePage(page){

    }

    render() {
        const {dataSource} = this.props;
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
            }
        ];
        return (
            <Modal
                title="邮件选择列表"
                width={875}
                visible={this.props.visible}
                onOk={() => this.props.handleOk()}
                onCancel={() => this.props.handleCancel()}>
                <div className="mail-table">
                    <Table
                        rowKey={record => record.id}
                        columns={columns}
                        pagination={false}
                        dataSource={_.get(dataSource, 'content')}/>
                    <AppPagination
                        total={_.get(dataSource, 'totalElements')}
                        pageSize={_.get(dataSource, 'size')}
                        currentPage={1}
                        handleChangePage={(page) => this.handleChangePage(page)}
                    />
                </div>
            </Modal>
        )
    }
}

export default MailSelectModal;