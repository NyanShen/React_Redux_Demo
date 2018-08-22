import React from "react";
import {Table} from "antd";

class PlanDetail extends React.Component {

    render() {
        const columns = [{
            title: 'message title',
            dataIndex: 'name'
        }];
        const dataSource = [
            {id: 'plan_id_001', name: 'plan_name_001'},
            {id: 'plan__test_id_001', name: 'nick name admin'}];
        return (
            <div>
                <Table
                    rowKey={record => record.id}
                    columns={columns}
                    dataSource={dataSource}
                    onRow={(record) => ({
                        onDoubleClick: () => this.props.confirmPlan(record)
                    })}
                />
            </div>
        )
    }
}

export default PlanDetail;