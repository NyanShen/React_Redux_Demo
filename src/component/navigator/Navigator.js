import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import MenuService from "service/MenuService";
import LoginUser from "service/login-service/LoginUser";
import "./index.scss";

const _menuService = new MenuService();

const _loginUser = new LoginUser();

const mapStateToProps = state => {
    return {
        menuData: state.MenuReducer.data
    }
};

@connect(mapStateToProps)
class Navigator extends React.Component {

    constructor(props) {
        super(props);
        this.isLogin = _loginUser.hasLogin();
        this.state = {
            currentType: props.nav
        }
    }

    activeItemClass(item) {
        return this.state.currentType === item.type ? 'active' : '';
    }

    toState(item) {
        this.setState({
            currentType: item.type
        });
    }

    render() {
        const {menuData} = this.props;
        const navigator = (
            <ul className="nav nav-tabs">
                {menuData &&
                _menuService.getModules(menuData.menuTree).map((item, index) => {
                        return (
                            <li key={'li_' + index} className={this.activeItemClass(item)}>
                                <Link to={item.state} onClick={() => this.toState(item)}>
                                    {menuData.navigators[item.type]}
                                </Link>
                            </li>
                        )
                    }
                )}
            </ul>);
        return (<div className="app-header-nav">{this.isLogin ? navigator : null}</div>)
    }
}

export default Navigator;