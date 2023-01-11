import React from 'react';
import './cards.css';
import { Row, Col} from 'antd';

function SalesDiscount() {
  
  return (
    <div>
      <Row className="cards-block">
        <Col span={12}>
        <div></div>
        </Col>
        <Col span={12}>
            <img alt='sales' src='/images/t4.png'/>
        </Col>
      </Row>
    </div>
  );
}

export default SalesDiscount;
