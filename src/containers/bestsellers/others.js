import './best.css';
import React, { useEffect} from 'react';
import { connect } from 'react-redux'
import { Row } from 'antd';
import Header from '../header'
import Cards from '../cards'
import Footer from '../footer'
import {getProducts} from '../../store/actions/productActions'
import {Redirect} from "react-router-dom";
import {getCategories } from '../../store/actions/productActions'
const onMount = props => () => {
   props.getProducts()
   props.getCategories()
 }
function Others(props) {
   useEffect(onMount(props), [])
console.log('category key: '+ props.location.propsSearch )
if (!props.location.propsSearch) return <Redirect to="/" />;
const {categories} = props.productReducer
const filteredList = categories.filter(item =>  item.id === props.location.propsSearch )
const categoryList = filteredList.map(item => ( 
  <div className="title">
   <div className="best">
     <h1 className="h1">{item.name}</h1>
   </div>
   <div className="play">
     <h1 className="h1 h2">{item.description}</h1>
  </div> 
 </div>
))
  return (
    <div className="card">
     <Header />
    {categoryList}
        <Row>
           <Cards category_id= {props.location.propsSearch} />
        </Row>
     <Footer />
    </div>
  );
}

const mapStateToProps = state =>({
   productReducer: state.productReducer
 })
 
 const mapDispatchToProps = {
   getProducts, getCategories
 }
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Others)