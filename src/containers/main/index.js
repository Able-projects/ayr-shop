import React, { useEffect} from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import Header from '../header'
import RowCards from '../product-cards'
import { Row, Col, Card, Tag } from 'antd';
import {Link } from "react-router-dom";
import Footer from '../footer'
import TabsSection from '../tabs-section'
import HeaderDiscount from '../header/discount'
import {getProducts} from '../../store/actions/productActions'
const { Meta } = Card;

const onMount = props => () => {
  props.getProducts()
}

function Main(props) {
  useEffect(onMount(props), [])
 
  return (
    <div>
      <HeaderDiscount />
      <Header />
      <div className="bg-img">
          <div className="bg-img--content">
            <p className="bg-img--text">All Year Round</p>
            <p className="bg-img--shop">Shop Now</p>
          </div>
      </div>
      <div>
          <h1 className="h1h">Hi, We're AYR.</h1>
          <div>
             <img  className="square-img" src="https://cdn.shopify.com/s/files/1/1212/1112/files/intro_img_600x.png?v=1583863526" />
          </div>
          <div className="circle-div" >
             <img className="circle-img" src="https://cdn.shopify.com/s/files/1/1212/1112/files/denim-circle-uncropped_compressed_800x.png?v=1583863675" />
          </div> 
          <div className='textdiv'>
            <p>
            AYR (pronounced 'air') stands for All Year Round.<br></br>
            We design seasonless essentials for everyday life. Perfect premium
            pieces to make you feel comfortable and confident, season after season.
            </p>
            <a className="alink">
            Shop Our Bestsellers
            </a>
          </div> 
       </div>
       <TabsSection />
       <RowCards />
       <Footer />
    </div>
  );
}
const mapStateToProps = state =>({
  productReducer: state.productReducer
})

const mapDispatchToProps = {
  getProducts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)