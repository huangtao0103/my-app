import React, { Component } from 'react';
import {Card, Button, Table, Form, Select, Modal, Input} from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils'

const FormItem = Form.Item
const { Option } = Select;

class City extends Component {

    state = {
        list: [],
        isShowOpenCity: false
    }

    params = {
        page: 1
    }

    componentDidMount() {
        this.getHandleOpenCity()
    }

    // 开通城市
    handleOpenCity = () => {
        console.log('1212')
        this.setState({
            isShowOpenCity: true
        })
    }

    // 获取列表数据
    getHandleOpenCity() {
        let _this = this;
        axios.ajax({
            url:'/open_city',
            data:{
                page: this.params.page
            }
        }).then((res)=>{
            if(res.code == 0){
                console.log(res)
                _this.setState({
                    list: res.result.item_list.map((item, index) => {
                        item.key = index
                        return item
                    })
                })
            }
        })
    }

    render() {
        const columns = [
            {
                title:'城市ID',
                dataIndex:'id'
            }, {
                title: '城市名称',
                dataIndex: 'name'
            }, {
                title: '用车模式',
                dataIndex: 'mode',
                render(mode){
                    return mode ==1 ?'停车点':'禁停区';
                }
            }, {
                title: '营运模式',
                dataIndex: 'op_mode',
                render(op_mode) {
                    return op_mode == 1 ? '自营' : '加盟';
                }
            }, {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
            }, {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render(arr){
                    return arr.map((item)=>{
                        return item.user_name;
                    }).join(',');
                }
            }, {
                title: '城市开通时间',
                dataIndex: 'open_time'
            }, {
                title: '操作时间',
                dataIndex: 'update_time',
                render: Utils.formateDate
            }, {
                title: '操作人',
                dataIndex: 'sys_user_name'
            }
        ]

        const tatleProps = {
            columns,
            dataSource: this.state.list,

        }
        return (
            <div>
                <Card>
                    <FilteForm></FilteForm>
                </Card>
                <Card style={{marginTop: 10}}>
                    <Button type='primary' onClick={() => {this.handleOpenCity()}}>开通城市</Button>
                </Card>
                <div className='content-wrap'>
                <Table
                    {...tatleProps}
                ></Table>
                </div>
                <Modal title='开通城市'
                    onCancel={() => {this.setState({isShowOpenCity: false})}}
                 visible={this.state.isShowOpenCity}>
                     <OpenCityForm></OpenCityForm>
                </Modal>
            </div>
        );
    }
}

export default City;

// 内联表单
class FilteForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Form layout='inline'>
                <FormItem label='城市'>
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder='全部' style={{width: 100}}>
                                <Option value=''>全部</Option>
                                <Option value='1'>北京市</Option>
                                <Option value='2'>天津市</Option>
                                <Option value='3'>深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label='用车模式'>
                    {
                        getFieldDecorator('mode')(
                            <Select placeholder='全部' style={{width: 120}}>
                                <Option value=''>全部</Option>
                                <Option value='1'>指定停车点模式</Option>
                                <Option value='2'>禁停区模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label='营运模式'>
                    {
                        getFieldDecorator('op_mode')(
                            <Select placeholder='全部' style={{width: 100}}>
                                <Option value=''>全部</Option>
                                <Option value='1'>自营</Option>
                                <Option value='2'>加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label='加盟商授权状态'>
                    {
                        getFieldDecorator('auth_status')(
                            <Select placeholder='全部' style={{width: 120}}>
                                <Option value=''>全部</Option>
                                <Option value='1'>已授权</Option>
                                <Option value='2'>未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type='primary' style={{margin: '0 20px'}}>搜索</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
FilteForm = Form.create({})(FilteForm)

// 开通城市表单
class OpenCityForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form

        const formLayoutProps = {
            labelCol: {
                span:5
            },
            wrapperCol: {
                span: 10
            }
        } 
        return (
            <Form layout='horizontal'>
                <FormItem label='城市' {...formLayoutProps}>
                            <Select placeholder='全部'>
                                <Option value=''>全部</Option>
                                <Option value='1'>指定停车点模式</Option>
                                <Option value='2'>禁停区模式</Option>
                            </Select>
                </FormItem>
            </Form>
        )
    }
}

OpenCityForm = Form.create({})(OpenCityForm)