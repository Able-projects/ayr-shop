import './best.css';
import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux'
import { Row } from 'antd';
import Header from '../header'
import Cards from '../cards'
import Footer from '../footer'
import {getProducts} from '../../store/actions/productActions'
import {getCategories, getProductsPage } from '../../store/actions/productActions'

const onMount = props => () => {
  //  props.getProducts()
   props.getCategories()
 }
function BestSellers(props) {
   useEffect(onMount(props), [])
   const {categories} = props.productReducer
   const filteredList = categories.filter(item =>  item.id === 7 )
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
 const [page,setPage] = useState(1)
   return (
    <div className="card">
      <Header search={true}/>
       {categoryList}
      <Row>
        <Cards category_id = {7} page={page} isbest={true}/>
      </Row>  
       <div className="page-row" >
         <button onClick={() => setPage(1) }>1</button>
         <button onClick={() => setPage(2) }>2</button>
         <button onClick={() => setPage(3) }>3</button>
         <button onClick={() => setPage(4)}>4</button>
         <button onClick={() => setPage(5) }>5</button>
         <button onClick={() => setPage(6) }>6</button>
       </div>
     <Footer />
    </div>
  );
}

const mapStateToProps = state =>({
   productReducer: state.productReducer
 })
 
 const mapDispatchToProps = {
   getProducts, getCategories, getProductsPage
 }
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(BestSellers)