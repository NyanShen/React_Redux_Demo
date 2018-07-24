import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import MenuService from "service/MenuService";
import LoginUser from "service/login-service/LoginUser";
import "./index.scss";

const _menuService = new MenuService();

const _loginUser = new LoginUser();
const isLogin = _loginUser.hasLogin();

const mapStateToProps = state => {
    return {
        menuData: state.MenuReducer.data
    }
};

class Navigator extends React.Component {

    constructor(props) {
        super(props);
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
        return (<div className="app-header-nav">{isLogin ? navigator : null}</div>)
    }
}


const NavigatorContainer = connect(
    mapStateToProps
)(Navigator);

export default NavigatorContainer;