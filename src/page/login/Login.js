import React from "react";
import {Row, Col} from "antd";
import {Form, Input, Button} from "antd";

import LoginHeader from "./LoginHeader";
import AppFooter from "page/layout/footer/AppFooter";
import LoginUser from "service/login-service/LoginUser";
import LoginService from "service/login-service/LoginService";
import "./index.scss";

const FormItem = Form.Item;
const _loginUser = new LoginUser();
const _loginService = new LoginService();

class LoginForm  extends React.Component{

    constructor(props){
        super(props);
    }

    loginHandler(e) {
        e.preventDefault();
        let loginInfo = {};
        this.props.form.validateFields((err, values) => {
            if(!err){
                loginInfo = {
                    username: values.username,
                    password: values.password
                };
                _loginService.login(loginInfo).then(res => {
                    _loginUser.persistUser(res.data);
                    this.props.history.push('/');
                });
            }
        });
    }

    render() {
        const {getFieldDecorator} =this.props.form;
        return (
            <div className="app-layout app-login">
                <div className="login-header">
                    <LoginHeader />
                </div>
                <div className="login-body">
                    <div className="app-layout-container">
                        <Row type="flex" justify="center">
                            <Col span={24}>
                                <div className="login-left">
                                    <img src="" alt="欢迎登陆react reducer demo"/>
                                </div>
                                <div className="login-right">
                                    <Form onSubmit={(e) => this.loginHandler(e)} className="login-form">
                                        <FormItem>
                                            {getFieldDecorator('username',{
                                                rules: [{
                                                    required: true,
                                                    message: "username not null"
                                                }]
                                            })(<Input addonBefore="username" placeholder="please enter username"/>)}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password',{
                                                rules: [{
                                                    required: true,
                                                    message: "password not null"
                                                }]
                                            })(<Input addonBefore="password" placeholder="please enter password"/>)}
                                        </FormItem>
                                        <FormItem>
                                            <Button className="btn-block" type="primary" htmlType="submit">login</Button>
                                        </FormItem>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <AppFooter />
            </div>
        )
    }
}

const Login = Form.create()(LoginForm);

export default Login;