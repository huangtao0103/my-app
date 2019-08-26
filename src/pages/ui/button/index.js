import React, { Component } from 'react';
import {Card, Button} from 'antd'
import '../ui.less'

class Buttons extends Component {
    state = {
        loading: true
    }

    handelCloseLoading() {
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <div>
                <Card title='基础按钮'>
                    <Button type='primary'>Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type='dashed'>Imooc</Button>
                    <Button type='danger'>Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title='图形按钮'>
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button icon='search' shape='circle'></Button>
                    <Button icon='search' type='primary'>搜索</Button>
                    <Button icon='download' type='primary'>下载</Button>
                </Card>
                <Card title='Loading按钮'>
                    <Button type='primary' loading={this.state.loading}>确定</Button>
                    <Button type='primary' shape='circle' loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape='circle' loading={this.state.loading}></Button>
                    <Button type='primary' onClick={this.handelCloseLoading.bind(this)}>关闭</Button>
                </Card>
            </div>
        );
    }
}

export default Buttons;