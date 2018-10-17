import React from "react";
import {Row, Col} from 'antd';
import {Form, Input, Tooltip, Icon, Cascader, Select, Checkbox, Button, AutoComplete} from 'antd';

import MailboxIndex from "page/mailbox/MailboxIndex";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class SendMail extends React.Component {

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 18},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <MailboxIndex>
                <Form>
                    <FormItem {...formItemLayout} label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [{
                                required: true, message: 'Please input your E-mail!',
                            }, {
                                type: 'email', message: 'The input is not valid E-mail!', multiple: true
                            }],
                        })(
                            <Input/>
                        )}
                    </FormItem>
                </Form>
            </MailboxIndex>
        )
    }
}

export default Form.create()(SendMail);