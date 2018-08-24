import React from "react";
import {Tooltip, Table, Icon, Button} from "antd";

class MailPart extends React.Component {

    render() {
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
                dataIndex: 'receiveTime'
            },
            {
                title: '删除',
                dataIndex: 'deleteMail',
                render: () => {
                    return <Button type="primary" size="small">删除</Button>
                }
            },
            {
                title: <Tooltip title="添加邮件"><Icon style={{fontSize: 16}} type="plus-circle"/></Tooltip>,
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
            </div>
        )
    }
}

export default MailPart;