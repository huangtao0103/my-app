import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon } from 'antd';
const FormItem = Form.Item;


class FormLogin extends Component {

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                message.success(`${userInfo.userName} 恭喜您, 注册成功, 密码为${userInfo.userPwd}` )
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Card title='登录行内表单'>
                    <Form layout='inline'>
                        <FormItem>
                            <Input placeholder='请输入用户名'></Input>
                        </FormItem>
                        <FormItem>
                            <Input placeholder='请输入密码'></Input>
                        </FormItem>
                        <FormItem>
                            <Button type='primary'>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title='水平表单' style={{marginTop: 10}}>
                    <Form style={{width: 300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'Jack',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(<Input prefix={<Icon type='user' />} placeholder='请输入用户名' ></Input>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '123456',
                                    rules: []
                                })(<Input prefix={<Icon type='lock' />} placeholder='请输入密码' type='password'></Input>)
                            }
                            
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    
                                })
                            }
                        </FormItem>
                        <FormItem>
                            <Button type='primary' onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}


export default Form.create()(FormLogin);