import React from 'react';
import './header.css';
import { Row, Col, Menu } from 'antd';
const {SubMenu} = Menu
function HeaderDiscount() {
  
  return (
    <div>
      <Row className="header-discount">
        <Col span={24}>
        <div>Stay Cozy at Home | <a className="highlight" href="https://www.ayr.com/collections/tees">Save 20%</a> when you buy 2 or more tees</div>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderDiscount;
