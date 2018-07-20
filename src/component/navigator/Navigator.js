import React from "react";
import {Link} from "react-router-dom";
import LoginUser from "service/login-service/LoginUser";
import "./index.scss";

const _loginUser = new LoginUser();
const isLogin = _loginUser.hasLogin();

const navItems = [];
const navigators = [];

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
        const navigator = (
            <ul className="nav nav-tabs">
                {navItems.map((item, index) => {
                        return (
                            <li key={'li_' + index} className={this.activeItemClass(item)}>
                                <Link to={item.state} onClick={() => this.toState(item)}>{navigators[item.type]}</Link>
                            </li>
                        )
                    }
                )}
            </ul>);
        return (<div className="app-navigator">{isLogin ? navigator : null}</div>)
    }
}

export default Navigator;