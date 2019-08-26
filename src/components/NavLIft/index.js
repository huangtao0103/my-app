import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import menuList from '../../config/menuConfig';
import { Menu, Icon, Switch } from 'antd';

import './index.less'
import Item from 'antd/lib/list/Item';

const SubMenu = Menu.SubMenu

class NavLift extends Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList)

        this.setState({
            menuTreeNode
        })
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key} title={item.title}>
                <NavLink to={item.key}>{item.title}</NavLink>    
            </Menu.Item>
        })
    }


    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLift;