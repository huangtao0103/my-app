import React, { Component } from 'react';
import {Card, Modal, Button} from 'antd'
import './ui.less'
class Modals extends Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
    }

    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }

    handleOpen2 = (type) => {
        Modal[type]({
            title: 'This is a notification message',
            content: (
              <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
              </div>
            ),
            onOk() {},
        })
    }

    render() {
        return (
            <div>
                <Card title='基础弹窗'>
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>

                </Card>
                <Card title='状态弹窗'>
                    <Button onClick={() => this.handleOpen2('info')}>Info</Button>
                    <Button onClick={() => this.handleOpen2('success')}>Success</Button>
                    <Button onClick={() => this.handleOpen2('error')}>Error</Button>
                    <Button onClick={() => this.handleOpen2('warning')}>Warning</Button>

                </Card>
                <Modal 
                    title='React'
                    visible={this.state.showModal1}
                    onCancel={() => {this.setState({showModal1: false})}}

                >
                    <p>woweduihfflashfijahfias</p>
                </Modal>
                <Modal 
                    title='React'
                    visible={this.state.showModal2}
                    okText='好的'
                    cancelText='算了'
                    onCancel={() => {this.setState({showModal2: false})}}

                >
                    <p>woweduihfflashfijahfias</p>
                </Modal>
                <Modal 
                    title='React'
                    style={{ top: 20 }}
                    visible={this.state.showModal3}
                    onCancel={() => {this.setState({showModal3: false})}}

                >
                    <p>woweduihfflashfijahfias</p>
                </Modal>
                <Modal 
                    title='React'
                    centered
                    visible={this.state.showModal4}
                    onCancel={() => {this.setState({showModal4: false})}}

                >
                    <p>woweduihfflashfijahfias</p>
                </Modal>
            </div>
        );
    }
}

export default Modals;