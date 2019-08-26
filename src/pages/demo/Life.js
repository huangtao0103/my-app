import React from 'react'
import './index.less'
import { Button } from 'antd'


export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleAdd() {
        let count = this.state.count + 1
        this.setState({
            count
        })
    }

    render() {
        return (
            <div className="content">
                <p>React生命周期</p>
                <button onClick={this.handleAdd.bind(this)}>点击一下</button>
                <p>{this.state.count}</p>
                <Button onClick={this.handleAdd.bind(this)}>点击一下</Button>
            </div>   
        )
    }
}