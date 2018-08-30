import React from "react";
import {connect} from "react-redux";
import {Tooltip, Table, Icon, Button, Input, Card} from "antd";

import {addBusiness} from "reduxModel/actions/ProcessAction";

let businessIndex = 0;
const Search = Input.Search;

const mapStateToProps = state => {
    return {
        businessDataSource: state.ProcessReducer.businessList
    }
};

const mapDispatchToProps = {
    addBusiness
};

@connect(mapStateToProps, mapDispatchToProps)
class BusinessPart extends React.Component {

    addBusiness() {
        this.props.addBusiness({index: businessIndex++});
    }

    render() {
        const {businessDataSource} = this.props;
        const columns = [
            {
                title: "",
                dataIndex: "delete",
                render: () => <Tooltip title="删除"><Icon type="minus-circle"/></Tooltip>
            },
            {
                title: 'N',
                dataIndex: 'index',
                render: (text) => text + 1
            },
            {
                title: '计划名称',
                dataIndex: 'planName',
                render: (text) => <Input size="small" style={{width: 150}} value={text}/>
            },
            {
                title: '企业名称',
                dataIndex: 'corporationName',
                render: () => <Input size="small" style={{width: 150}}/>
            },
            {
                title: '本地附件',
                dataIndex: 'blob',
                render: () => <Input size="small" style={{width: 150}}/>
            },
            {
                title: '删除',
                dataIndex: 'deleteBusiness',
                render: () => {
                    return <Button type="primary" size="small">删除</Button>
                }
            }
        ];
        return (
            <div className="business-part">
                <Card type="inner" title="公共部分">
                    <div className="form-group-inline">
                        <div className="form-item">
                            <span className="form-label">计划名称：</span>
                            <div className="form-edit">
                                <Search
                                    name="comPlanName"
                                    enterButton
                                />
                            </div>
                        </div>
                        <div className="form-item">
                            <span className="form-label">企业名称：</span>
                            <div className="form-edit">
                                <Search
                                    name="comCorporationName"
                                    enterButton
                                />
                            </div>
                        </div>
                    </div>
                </Card>
                <Card
                    type="inner"
                    title="列表部分"
                    extra={(
                        <Tooltip title="添加">
                            <Icon
                                style={{fontSize: 16}}
                                type="plus-circle"
                                onClick={() => this.addBusiness()}/></Tooltip>
                    )}>

                    <Table
                        rowKey={record => record.index}
                        columns={columns}
                        pagination={false}
                        dataSource={businessDataSource}/>
                </Card>
            </div>
        )
    }
}

export default BusinessPart;