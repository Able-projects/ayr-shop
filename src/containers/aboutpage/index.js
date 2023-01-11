import React from 'react';
import './about.css';
import { Row, Col } from 'antd';
import Header from '../header'
import Footer from '../footer'
import AboutCards from './about-cards'
function AboutUs() {
  
  return (
    <div className="card">
     <Header />
     <Row className="rowa">
         <Col span={8}>
             <div className="about1">
                 <img src="/images/im1.png" alt='someimage'/>
             </div>
         </Col>
         <Col span={8}>
             <div>
             <h1 className="h1">All yours.</h1>
             <p className='fpl'>AYR (pronounced 'air') stands for All Year Round.<br/> <br/>
              We design seasonless essentials for everyday life. Perfect premium pieces to make you feel comfortable and confident, season after season.<br/> <br/>
              AYR was founded in NYC by three fashion friends committed to creating confidence through clothing. It's not about a label or a logo. It's about the woman who wears it. Strong, smart women have been our #1 inspiration since 2014.</p>
             <p className='fp'>Get on the list.</p>
             <p className='fpl'>Be first to find out about new styles, secret sales, etc.</p>
             </div>
         </Col>
         <Col span={8}>
             <div className="address">
                 <b className="pb">AYR Soho</b>
                 <p className="pl">199 Lafayette <br/>New York, NY <br/> 10012</p>
             </div>
             <div className="address">
                 <b className="pb">AYR LA</b>
                 <p className="pl">1350 Abbot Kinney Blvd<br/>1350 Abbot Kinney Blvd <br/> 90012</p>
             </div>
             <div className="address">
                 <b className="pb">AYR HQ</b>
                 <p className="pl">Call or Text Us <br/>201-383-5626 <br/> e: studio@ayr.com</p>
             </div>
         </Col>
     </Row>
     <Row>
       <img src="/images/im.png" className="imga" alt='someimage'/>
     </Row>
     <Row className="press">
        <h1 className="h1">Press Play</h1>
     </Row>
     <Row className="press2">
        <p className='fpl'>Take it from the references you can rely on.</p>
     </Row>
     <Row >
         <AboutCards/>
     </Row>
     <Row >
         <AboutCards/>
     </Row>
     <Row >
         <AboutCards/>
     </Row>
     <Footer />
    </div>
  );
}

export default AboutUs;
