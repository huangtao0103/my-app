import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox, Radio, Select, Switch, DatePicker, InputNumber, TimePicker, Upload } from 'antd';
import moment from 'moment';


const FormItem = Form.Item;
const RadioGroup = Radio.Group
const { Option } = Select;
const TextArea = Input.TextArea

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
  
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}



class FormReg extends Component {
    state = {
        loading: false,
      };

    handleSubmit = () => {
        console.log(this.props.form.getFieldsValue())
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };

    render() {
        const { getFieldDecorator } = this.props.form

        const formItemLayout = {
            labelCol: {
              xs: 24,
              sm: 4,
            },
            wrapperCol: {
              xs: 24,
              sm: 10,
            },
        };

        const offsetLayout = {
            wrapperCol: {
              xs: 24,
              sm: {
                  span: 12,
                  offset: 4
              },
            },
        };

        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          const { imageUrl } = this.state;

        return (
            <div>
                <Card title="注册表单">
                    <Form layout='horizontal' {...formItemLayout}>
                        <FormItem label='用户名'>
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
                        <FormItem label='密码'>
                        {
                            getFieldDecorator('userPwd', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ]
                                })(<Input type='password' prefix={<Icon type='user' />} placeholder='请输入密码' ></Input>)
                            }
                        </FormItem>
                        <FormItem label='性别'>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1'
                                })(
                                    <RadioGroup>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='2'>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label='年龄'>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18
                                })(
                                   <InputNumber></InputNumber>
                                )
                            }
                        </FormItem>
                        <FormItem label='当前状态'>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '2'
                                })(
                                   <Select>
                                       <Option value='1'>咸鱼1条</Option>
                                       <Option value='2'>咸鱼2条</Option>
                                       <Option value='3'>咸鱼3条</Option>
                                       <Option value='4'>咸鱼4条</Option>
                                       <Option value='5'>咸鱼5条</Option>
                                   </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='爱好'>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['2','5']
                                })(
                                   <Select mode='multiple'>
                                       <Option value='1'>游泳</Option>
                                       <Option value='2'>钓鱼</Option>
                                       <Option value='3'>打牌</Option>
                                       <Option value='4'>看电视</Option>
                                       <Option value='5'>听儿歌</Option>
                                   </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='是否已婚'>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                   <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label='生日'>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2018-08-08')
                                })(
                                   <DatePicker 
                                    showTime
                                    format='YYYY-MM-DD HH:mm:ss'
                                   />
                                )
                            }
                        </FormItem>
                        <FormItem label='联系地址'>
                            {
                                getFieldDecorator('address', {
                                    
                                })(
                                   <TextArea 
                                        autosize={{minRows: 4, maxRows: 6}}
                                   />
                                )
                            }
                        </FormItem>
                        <FormItem label='早起时间'>
                            {
                                getFieldDecorator('time', {
                                    
                                })(
                                   <TimePicker></TimePicker>
                                )
                            }
                        </FormItem>
                        <FormItem label='头像'>
                            {
                                getFieldDecorator('userImg', {
                                    
                                })(
                                   <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        beforeUpload={beforeUpload}
                                        onChange={this.handleChange}
                                   >
                                       {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                   </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >
                            {
                                getFieldDecorator('userImg', { 

                                })(
                                   <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} >                           
                            <Button type='primary' onClick={this.handleSubmit}>注册</Button>                        
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormReg);