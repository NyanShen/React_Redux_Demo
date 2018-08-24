import React from "react";
import {Pagination} from "antd";

import "./index.scss";

class AppPagination extends React.Component {

    handleChange(currentPage) {
        this.props.handleChangePage(currentPage);
    }

    showTotalPage() {
        return `共 ${this.props.total} 条`;
    }

    render() {
        const {total, pageSize, currentPage} = this.props;
        return (
            <div className="pagination-panel">
                {total &&
                <Pagination
                    defaultCurrent={1}
                    showQuickJumper={true}
                    total={total}
                    pageSize={pageSize}
                    current={currentPage}
                    showTotal={() => this.showTotalPage()}
                    onChange={() => this.handleChange()}
                />}
            </div>
        )
    }
}

export default AppPagination;