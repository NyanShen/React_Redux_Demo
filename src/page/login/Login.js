import React from "react";
import {Row, Col} from "antd";
import {Form, Input, Button} from "antd";

import LoginHeader from "./LoginHeader";
import AppFooter from "page/layout/footer/AppFooter";
import "./index.scss";

const FormItem = Form.Item;

class LoginForm  extends React.Component{

    constructor(props){
        super(props);
    }

    loginHandler() {

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
                                    <Form onSubmit={() => this.loginHandler()} className="login-form">
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