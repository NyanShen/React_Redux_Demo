import React from "react";

import AppHeader from "page/layout/header/AppHeader";
import AppFooter from "page/layout/footer/AppFooter";

class AppLayout  extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="app-layout">
                <AppHeader />
                {this.props.children}
                <AppFooter />
            </div>
        )
    }
}

export default AppLayout;