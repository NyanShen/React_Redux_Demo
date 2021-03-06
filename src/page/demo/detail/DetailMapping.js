import React from "react";

import PlanDetail from "page/demo/detail/PlanDetail";
import ManagerDetail from "page/demo/detail/ManagerDetail";

class DetailMapping extends React.Component{

    render () {
        const detailMapping = {
            "plan": <PlanDetail confirmPlan={(record) => this.props.confirmPlan(record)}/>,
            "manager": <ManagerDetail />
        };
        return (
            <div>{detailMapping[this.props.type]}</div>
        )
    }
}

export default DetailMapping;