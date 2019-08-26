import React, { Component } from 'react';
import { Card, Row, Col, Modal } from 'antd';

class Gallery extends Component {
    state = {
        visible: false
    }

    openBigImg = (item) => {
        this.setState({
            visibleImg: `/gallery/${item}`,
            visible: true
        })
    }

    render() {
        const imgs = []
        for(let i = 0; i < 5; i++) {
            imgs[i] = []
            for(let j = 1; j <= 5; j++) {
                imgs[i].push(`${i * 5 + j}.png`)
            }
        }
        const imgList = imgs.map(list => list.map(item => <Card
            cover={<img src={'/gallery/' + item}></img>}
            onClick={() => this.openBigImg(item)}
        >
            <Card.Meta title='React Admin' description='I Love Imooc' />
        </Card>))
        console.log(imgList)
        return (
            <div>
                
                        <Row gutter={10}>
                            {/* {list.map((item, index) => 
                                <Col md={index === 4 ? 4 : 5} >
                                    <Card
                                        cover={<img src={'/gallery/' + item}></img>}
                                    >
                                        <Card.Meta title='React Admin' description='I Love Imooc' />
                                    </Card>
                                </Col>
                                )} */}
                            <Col md={5}>
                                {imgList[0]}
                            </Col>
                            <Col md={5}>
                                {imgList[1]}
                            </Col>
                            <Col md={5}>
                                {imgList[2]}
                            </Col>
                            <Col md={5}>
                                {imgList[3]}
                            </Col>
                            <Col md={4}>
                                {imgList[4]}
                            </Col>
                        </Row>
                    <Modal
                        width={300}
                        height={500}
                        visible={this.state.visible}
                        title='图片画廊'
                        onCancel={() => this.setState({visible: false})}
                        footer={null}
                    >
                        <img src={this.state.visibleImg} alt="" style={{width: '100%'}} />
                    </Modal>
            
            </div>
        );
    }
}

export default Gallery;