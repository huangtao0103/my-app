import React, { Component } from 'react';
import { Card, Carousel } from 'antd';

import './ui.less'
class Carousels extends Component {
    onChange = (a, b, c) => {
        console.log(a, b, c);
      }
    render() {
        return (
            <div>
                <Card title='轮播图'>
                    <Carousel autoplay effect='fade'>
                        <div><h1>11111</h1></div>
                        <div><h1>22222</h1></div>
                        <div><h1>33333</h1></div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}

export default Carousels;