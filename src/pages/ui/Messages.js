import React, { Component } from 'react';
import {Card, Message, Button} from 'antd';

class Messages extends Component {
    handelOpenMessage = (type) => {
        Message[type]('恭喜你操作成功')
    }
    render() {
        return (
            <div>
                <Card title='全局提示框' className='card-wrap'>
                    <Button type='primary' onClick={() => this.handelOpenMessage('success')}>success</Button>
                    <Button type='primary' onClick={() => this.handelOpenMessage('info')}>info</Button>
                    <Button type='primary' onClick={() => this.handelOpenMessage('warning')}>warning</Button>
                    <Button type='primary' onClick={() => this.handelOpenMessage('error')}>error</Button>
                    <Button type='primary' onClick={() => this.handelOpenMessage('loading')}>loading</Button>
                </Card>
            </div>
        );
    }
}

export default Messages;