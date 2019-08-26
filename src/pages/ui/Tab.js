import React, { Component } from 'react';
import {Card, Tabs, Button, Icon, Message} from 'antd';
const { TabPane } = Tabs;

class Tab extends Component {
    constructor(props) {
        super(props)
        this.newTabIndex = 0
    }
    state = {
        panes: []
    }
    componentDidMount() {
        this.handlePaneList()
    }

    callback = (key) => {
        Message.info(key)
    }

    handlePaneList() {
        const panes = [
            {
                key: '1',
                tab: 'Tab 1',
                content: 'Tab 1'
            },
            {
                key: '2',
                tab: 'Tab 2',
                content: 'Tab 2'
            },
            {
                key: '3',
                tab: 'Tab 3',
                content: 'Tab 3'
            },
        ]
        this.setState({
            panes,
            activeKey: panes[0].key,
        })
    }

    onChange = activeKey  => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
      };
    
      add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ tab: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      };
    
      remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      };


    render() {
        return (
            <div>
                <Card title='tab页签' className='card-wrap'>
                    <Tabs defaultActiveKey='1' onChange={this.callback}>
                        <TabPane key='1' tab='Tab 1'>pane 1</TabPane>
                        <TabPane key='2' tab='Tab 2' disabled>pane 2</TabPane>
                        <TabPane key='3' tab='Tab 3'>pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title='tab带图标的页签' className='card-wrap'>
                    <Tabs defaultActiveKey='1' onChange={this.callback}>
                        <TabPane key='1' tab={<span><Icon type='plus'></Icon>Tab 1</span>}>pane 1</TabPane>
                        <TabPane key='2' tab='Tab 2'>pane 2</TabPane>
                        <TabPane key='3' tab='Tab 3'>pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title='tab动态控制页签' className='card-wrap'>
                    <Tabs 
                        activeKey={this.state.activeKey}
                        onChange={this.onChange} 
                        type='editable-card'
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.length && this.state.panes.map((item, index) => {
                                return (
                                    <TabPane key={item.key} tab={item.tab}>{item.content}</TabPane>
                                )
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default Tab;