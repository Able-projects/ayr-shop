import React from 'react';
import './footer.css';
import { Row, Col, Menu} from 'antd';
import {FacebookOutlined, TwitterOutlined,GooglePlusOutlined, InstagramOutlined} from '@ant-design/icons'
import {Link } from "react-router-dom";

const {SubMenu} = Menu
function Footer() {
  
  return (
    <div className="footer">
     <Row >
        <Col span={8} className="footer-social">
          <FacebookOutlined />
          <TwitterOutlined />
          <GooglePlusOutlined />
          <InstagramOutlined />
        </Col>
        <Col span={8}>
          <p className='fp'>Get on the list.</p>
        </Col>
        <Col span={8} >
          <input type='email' placeholder='Your email' className="finput" />
          <Link to="/signup"><a className='asu' >Subcribe</a></Link>
          
        </Col>
      </Row>
      <Row >
        <Col span={8} className="footer-social">
            <a className="af" >About</a>
            <a className="af" >Help</a>
            <a className="af" >Terms</a>
            <a className="af" >Privacy</a>
            <a className="af" >Returns</a>
        </Col>
        <Col span={8}>
          <p className='fpl'>Be first to find out about new styles, secret sales, etc.</p>
        </Col>
        <Col span={8} >
          
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
