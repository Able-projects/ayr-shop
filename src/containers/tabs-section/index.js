import React from 'react';
import { Tabs } from 'antd';
import './tabs.css';
const { TabPane } = Tabs;

function TabsSection() {
  
    return (
  <div className="card-container">
    <h1 className="denim">Denim</h1>
    <Tabs type="card">
      <hr className='hr'/>
      <TabPane tab="The Riser" key="1" >
          <div className='tabs-text'>
            <p className='p1'>Hi-Rise Skinny Fit</p>
            <p className='p2'>Our best-selling, high-rise skinny fit with flattering seam details. Comes in 4 lengths and 3 washes. Maritza wears Neon Jupiter wash. </p>
            <a className='p3'>Find Your Perfect Pair</a>
          </div>
          <div className='tabs-img'>
              <img src='../images/t1.png' alt='picture1'/>
          </div>
      </TabPane>
      <TabPane tab="The Bomb Pop" key="2">
          <div className='tabs-text'>
            <p className='p1'>Mid-Rise Straight Leg Fit</p>
            <p className='p2'>A vintage-inspired mid-rise straight-leg with the incredible comfort of power-stretch. Comes in 3 lengths and 3 washes. Maritza wears Bomba wash.</p>
            <a className='p3'>Find Your Perfect Pair</a>
          </div>
          <div className='tabs-img'>
              <img src='../images/t2.png' alt='picture2'/>
          </div>
      </TabPane>
      <TabPane tab="The Chiller" key="3">
          <div className='tabs-text'>
            <p className='p1'>Mid-Rise Skinny Fit</p>
            <p className='p2'>A vintage-inspired mid-rise straight-leg with the incredible comfort of power-stretch. Comes in 3 lengths and 3 washes. Maritza wears Bomba wash. </p>
            <a className='p3'>Find Your Perfect Pair</a>
          </div>
          <div className='tabs-img'>
              <img src='../images/t3.png' alt='picture3'/>
          </div>
      </TabPane>
      <TabPane tab="Denim 101" key="4">
          <div className='tabs-img2'>
             <img src='../images/t4.png' alt='picture4'/>
          </div>
          <div className='tabs-text2'>
              <div className='t1'>
                 <h5 className='h5'><img src='../images/circle.png' alt='picture5' /> The Waistband</h5>
                 <p className='p2'>A flexible, comfortable, single-piece construction that stretches with your every belly laugh, deep sigh, big meal, and impromptu nap. </p>
              </div>
              <div className='t2'>
                 <h5 className='h5'><img src='../images/tri.png'  alt='picture6'/> The Yoke</h5>
                 <p className='p2'>Our yoke is constructed to celebrate your bum and complement your curves. It has nothing to do with eggs. (Yolk joke.) </p>
              </div>
              <div className='t1'>
                 <h5 className='h5'><img src='../images/rec.png' alt='picture55' /> The Pocket</h5>
                 <p className='p2'>Our pockets are sized, shaped, and specially placed to look good on every-butt-y.</p>
              </div>
              <div className='t2'>
                 <h5 className='h5'><img src='../images/circle.png' alt='picture8'/> The Back Panel</h5>
                 <p className='p2'>Our pockets are sized, shaped, and specially placed to look good on every-butt-y.</p>
              </div>
              <div className='t1'>
                 <h5 className='h5'><img src='../images/tri.png' alt='picture8'/> The Fabric</h5>
                 <p className='p2'>Our best-selling, high-rise skinny fit with flattering seam details. Comes in 4 lengths and 3 washes. Maritza wears Neon Jupiter wash. </p>
              </div>
            </div>
      </TabPane>
    </Tabs>
  </div>
  );
}

export default TabsSection;