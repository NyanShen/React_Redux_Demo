import React from "react";
import {Input} from  "antd";

import FormItemHoc from "hoc/FormItemHoc";

@FormItemHoc
class HocDemo extends React.Component {

    render() {
        return (
                <div>
                    <Input type="text" name="name" {...this.props.name}/>
                </div>
        )
    }
}

export default HocDemo;