import './cards.css';
import React,  {useEffect}  from 'react';
import { Row, Col, Card, Tag } from 'antd';
import {Link } from "react-router-dom";
import { connect } from 'react-redux'
import {getProducts,deleteProduct} from '../../store/actions/productActions'

const { Meta } = Card;

const onMount = props => () => {
  props.getProducts()
  props.deleteProduct()
}


function RowCards(props) {
  
useEffect(onMount(props), [])

const {products} = props.productReducer
const filteredList = products.filter(item =>  item.category.id == 7 )
const productList = filteredList.map(item => (
  <Col span={6}>
     <Link to={{
        pathname: "/product",
        propsSearch: item.id }}> 
        <Card
        hoverable
       className="blog-item"
        cover={<img alt="clothes" src={item.image || '/images/c1.png'} />}
      >
        <Meta className="card-meta" title={item.title} description={item.price + '$'} />
        <br/>
        {item.sizes.map(size => (<a className='size'>{size.name}</a>))}
        {item.colors.map(color => (<a className='size'>{color.name}</a>))}
      </Card>
      </Link>
    </Col>
))
  return (
    <div className='rowcards'>
      <Row>
        <h1 className='h11' >There are selling out</h1>
      </Row>
      <Row>
       {productList}
      </Row>
    </div>
  );
}

const mapStateToProps = state =>({
  productReducer: state.productReducer
})

const mapDispatchToProps = {
  getProducts,deleteProduct
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RowCards)