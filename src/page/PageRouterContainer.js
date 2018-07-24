import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import AppLayout from "page/layout/AppLayout";
import HomeContainer from "page/home/HomeContainer";
import Unauthorized from "page/error/Unauthorized";
import Forbidden from "page/error/Forbidden";
import NotFound from "page/error/NotFound";
import PrivateRoute from "page/PrivateRoute";
import LoginUser from "service/login-service/LoginUser";
import MailboxRouter from "page/mailbox/MailboxRouter";
import {fetchMenuData} from "reduxModel/actions/MenuAction";
import {connect} from "react-redux";
import MenuService from "service/MenuService";

const _menuService = new MenuService();
const _loginUser = new LoginUser();

const mapStateToProps = state => {
    return {
        menuData: state.MenuReducer.data
    }
};
const mapDispatchToProps = {
    fetchMenuData: fetchMenuData,
};

class PageRouter extends React.Component {

    constructor(props) {
        super(props);
        this.hasLogin = _loginUser.hasLogin();
    }

    componentDidMount() {
        this.props.fetchMenuData();
    }

    redirectDefault(menuTree) {
        const defaultState = _menuService.getDefaultState(menuTree);
        const defaultRoute = <Redirect to={defaultState}/>;
        const loginRoute = <Redirect to="/login"/>;
        return this.hasLogin ? defaultRoute : loginRoute;
    }

    render() {
        return (
            this.props.menuData &&
            <AppLayout>
                <Switch>
                    <Route path='/' exact render={() => this.redirectDefault(this.props.menuData.menuTree)}/>
                    <Route path="/home" component={HomeContainer}/>
                    <PrivateRoute component={MailboxRouter}/>
                    <PrivateRoute path="/privateHome" component={HomeContainer}/>
                    <Route path="/unauthorized" component={Unauthorized}/>
                    <Route path="/forbidden" component={Forbidden}/>
                    <Route component={NotFound}/>
                </Switch>
            </AppLayout>
        )
    }
}

const PageRouterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageRouter);

export default PageRouterContainer;