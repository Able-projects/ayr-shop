import React from 'react';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;
function AboutCards() {
  
  return (
    <div className='rowcard'>
      <Row>
        <Col span={4}>
          <Card hoverable
                 className="blog-item"
                  cover={<img alt="example123" src="https://cdn.shopify.com/s/files/1/1212/1112/articles/Vogue_2020_Vision_720x720.png?v=1578583378" />}>
             
          </Card>
        </Col>
        <Col span={4}>
          <Card hoverable
                 className="blog-item"
                  cover={<img alt="example234" src="https://cdn.shopify.com/s/files/1/1212/1112/articles/man-repeller_720x720.png?v=1578582869" />}>
          
          </Card>
        </Col>
        <Col span={4}>
          <Card hoverable
                 className="blog-item"
                  cover={<img alt="example" src="https://cdn.shopify.com/s/files/1/1212/1112/articles/WSJ_Pop_ups_720x720.png?v=1571768373" />}>
          
          </Card>
        </Col>
        <Col span={4}>
          <Card hoverable
                 className="blog-item"
                  cover={<img alt="example" src="https://cdn.shopify.com/s/files/1/1212/1112/articles/Glamour_jeans_final_720x720.png?v=1571768745" />}>
          </Card>
        </Col>
        <Col span={4}>
          <Card hoverable
                 className="blog-item"
                  cover={<img alt="example" src="https://cdn.shopify.com/s/files/1/1212/1112/articles/O_Magazine_720x720.png?v=1571767541" />}>
          </Card>
        </Col>
        <Col span={4}>
          <Card hoverable
                 className="blog-item"
                  cover={<img alt="example445" src="https://cdn.shopify.com/s/files/1/1212/1112/articles/Inc_fac9922d-2ae9-4b89-81b5-d442bcbc0703_720x720.png?v=1562882397" />}>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AboutCards;
