import React from 'react';
import {toastr} from "react-redux-toastr";
import {Route, withRouter} from 'react-router-dom';
import LoginUser from 'service/login-service/LoginUser';

import Unauthorized from "page/error/Unauthorized";

const _loginUser = new LoginUser();
//私有路由，只有登录的用户才能访问
class PrivateRoute extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuth : _loginUser.hasLogin()
    }
    }
    componentWillMount(){
        if(!this.state.isAuth){
            toastr.error('login timeOut, return to the login page after 3s');
            const {history} = this.props;
            setTimeout(() => {
                history.replace("/login");
            }, 3000)
        }
    }
    render(){
        const { component: Component, path="/", exact=false, strict=false} = this.props;
        return this.state.isAuth ?  (
            <Route  path={path} exact={exact}  strict={strict}
                    render={(props)=>( <Component {...props} /> )} />) : <Unauthorized />;
    }
}
export default withRouter(PrivateRoute);