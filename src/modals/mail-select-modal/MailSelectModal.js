import React from "react";
import {connect} from "react-redux";
import {Tooltip, Table, Icon, Modal} from "antd";

import {fetchMailData} from "reduxModel/actions/MailAction";
import AppPagination from "component/pagination/AppPagination";

const mapStateToProps = state => {
    return {
        dataSource: state.MailReducer.data,
        loading: state.MailReducer.loading
    }
};
const mapDispatchToProps = {
    fetchMailList: fetchMailData
};

@connect(mapStateToProps, mapDispatchToProps)
class MailSelectModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: [],
            selectedRows: []
        }
    }

    componentDidMount() {
        this.props.fetchMailList({page: 0, size: 10});
    }

    handleChangePage(page) {
        this.setState({page: page - 1, selectedKeys: [], selectedRows: []});
    }

    handleTableChange(selectedKeys, selectedRows) {
        this.setState({selectedKeys, selectedRows});
    }

    handleOk() {
        this.props.handleOk(this.state.selectedRows);
        this.setState({selectedKeys: [], selectedRows: []});
    }

    render() {
        const {loading, dataSource} = this.props;
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
        const rowSelection = {
            selectedRowKeys: this.state.selectedKeys,
            onChange: (selectedKeys, selectedRows) => {
                this.handleTableChange(selectedKeys, selectedRows);
            }
        };
        return (
            <Modal
                title="邮件选择列表"
                width={875}
                visible={this.props.visible}
                onOk={() => this.handleOk()}
                onCancel={() => this.props.handleCancel()}>
                <div className="mail-table">
                    <Table
                        rowKey={record => record.id}
                        columns={columns}
                        pagination={false}
                        loading={loading}
                        rowSelection={rowSelection}
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