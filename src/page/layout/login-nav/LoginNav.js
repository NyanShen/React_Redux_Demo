import React from "react";
import {toastr} from "react-redux-toastr";
import LoginUser from "service/login-service/LoginUser";
import LoginService from "service/login-service/LoginService";

import "./index.scss";

const _loginUser = new LoginUser();
const _loginService = new LoginService();

class LoginNav extends React.Component{

    logout() {
        _loginService.logout(_loginUser.getUser().token).then(() => {
            _loginUser.clear();
            window.location = '/';
        }).catch(err => {
            toastr.error(err.data.message)
        })
    }

    render() {
        const isLogin =_loginUser.hasLogin();
        const fullName = isLogin ? _loginUser.getUser().fullName : null;
        const username = isLogin ? _loginUser.getUser().username : null;

        const loginInfo = (
          <ul className="login-nav">
              <li>
                  <small className="login-user">
                      你好，
                      {fullName || username}
                  </small>
              </li>
              <li>
                  <a onClick={() => this.logout()}>退出</a>
              </li>
          </ul>
        );
        return (
            <div>{isLogin ? loginInfo : null}</div>
        )
    }
}

export default LoginNav;