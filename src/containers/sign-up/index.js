import React from 'react';
import './signup.css';
import {Link } from "react-router-dom";
import { Row, Col } from 'antd';
function SignUp() {
  
  return (
    <div>
     <Row className='signLogo'>
        <Col span={24}>
          <Link to='/'>
             <img className="logo" src="//cdn.shopify.com/s/files/1/1212/1112/t/10/assets/logo-horizontal@2x.png?v=15544557364951493001" alt='logo'/>
          </Link> 
        </Col>
      </Row>
      <h1 className="h1thanks">Thanks.</h1>
      <p className='ps'>Confirm Your Subscription.</p>
      <form className="form">
          <label>Email</label>
          <input type='email' name='email' className='s-input' />
          <label>Last Name</label>
          <input type='email' name='lname' className='s-input' />
          <label>First Name</label>
          <input type='email' name='fname' className='s-input' />
          <Link to="/"> <button>Subcribe</button></Link>
      </form>
    </div>
  );
}

export default SignUp;
