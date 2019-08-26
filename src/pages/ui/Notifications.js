import React, { Component } from 'react';
import {Card, Button, Notification} from 'antd'
import './ui.less'

class Notifications extends Component {
    openNotification = (type, direction) => {
        if(direction) {
            Notification.config({
                placement: direction
            })
        }
        Notification[type]({
            message: '发工资了',
            description: '上个月考勤22天,迟到12天,实发工资250,请笑纳'
        })
    }

    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button type='primary' onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.openNotification('error')}>error</Button>
                    <Button type='primary' onClick={() => this.openNotification('info')}>info</Button>
                    <Button type='primary' onClick={() => this.openNotification('warning')}>warning</Button>
                </Card>
                <Card title='提醒框方向'>
                <Button type='primary' onClick={() => this.openNotification('success', 'topLeft')}>Success</Button>
                    <Button type='primary' onClick={() => this.openNotification('error', 'topRight')}>error</Button>
                    <Button type='primary' onClick={() => this.openNotification('info', 'bottomLeft')}>info</Button>
                    <Button type='primary' onClick={() => this.openNotification('warning', 'bottomRight')}>warning</Button>
                </Card>
            </div>
        );
    }
}

export default Notifications;