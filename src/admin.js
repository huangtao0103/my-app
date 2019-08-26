import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Header from './components/Header';
import Footer from './components/Footer';
import NavLIft from './components/NavLIft';
import Home from './pages/home'
import './style/common.less'


class admin extends Component {
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render() {
        return (
            <Row className="container">
                <Col span="3" className="nav-left"> 
                    <NavLIft />
                </Col>
                <Col span="21" className="main"> 
                    <Header></Header>
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        );
        // return (
        //     <Layout>
        //         <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        //             <NavLIft />
        //         </Layout.Sider>
        //         <Layout>
        //             <Layout.Header style={{ background: '#fff', padding: 0, height: 'auto' }}>
        //                 <Header></Header>
        //             </Layout.Header>
                    
        //             <Layout.Content
        //               style={{
        //                 margin: '24px 16px',
        //                 padding: 24,
        //                 background: '#fff',
        //                 minHeight: 280,
        //               }}
        //             >
        //                 {this.props.children}
        //             </Layout.Content>
        //             <Layout.Footer><Footer /></Layout.Footer>
                    
        //         </Layout>
        //     </Layout>
        // );
    }
}

export default admin;