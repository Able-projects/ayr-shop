import React,  {useState,useEffect}  from 'react';
import { Row, Col, Card, Tag } from 'antd';
import {Link } from "react-router-dom";
import './cards.css';
import { connect } from 'react-redux'
import EditProduct from '../modal-blogs/editproduct';
import {deleteProduct,editProduct, getProductsPage} from '../../store/actions/productActions'
import {DeleteTwoTone ,EditTwoTone} from '@ant-design/icons'
const { Meta } = Card;

const onMount = props => () => {
  props.getProductsPage(props.page)
}
function Cards(props) {
  
  
  useEffect(onMount(props), [])
  const {isAuth,  currentUserId} = props.authReducer
  const [modalBlogVisible, setModalBlogVisible] = useState(false)
  const [productID, setproductID] = useState(null)

  const openModal = (id) => {
      setModalBlogVisible(true) 
      setproductID(id)
    }
 
  const closeModal = () => {
      setModalBlogVisible(false)
    }

  const deleteProduct =  (id) =>{
    if (window.confirm('Are you sure?')){
      props.deleteProduct(id)
    }
  }
  const {products} = props.productReducer
  let filteredList = []
  props.isbest ?
      filteredList = products:
      filteredList = products.filter(item =>  item.category.id == props.category_id )
  
  const productList = filteredList.map(item => (
  
  <Col span={8}> 
        <Card
        hoverable
       className="blog-item"
        cover={<img alt="clothes" src={item.image || '/images/c1.png'} />}
      >
        <Link to={{
        pathname: "/product",
        propsSearch: item.id }}> 
          <Meta className="card-meta" title={item.title} description={item.price + '$'} />
        </Link>
        <br/>
        {item.sizes.map(size => (<a className='size'>{size.name}</a>))}
        {item.colors.map(color => (<a className='size'>{color.name}</a>))}
        
        {(isAuth && currentUserId == 5  ) ? 
        <div>
            <button className="deletebtn"  onClick={() => openModal(item.id)}><EditTwoTone /></button>
            <button className="deletebtn"  onClick={() => { deleteProduct(item.id)} }><DeleteTwoTone /></button>
        </div>
      
        : null }
       </Card>
     
    </Col>
))
  return (
    <div className='rowcards'>
      <Row>
       {productList}
      </Row>
      <EditProduct modalBlogVisible={modalBlogVisible} close={closeModal} productID={productID}/>
    </div>
  );
}

const mapStateToProps = state =>({
  productReducer: state.productReducer,
  authReducer: state.authReducer
})

const mapDispatchToProps = {
  deleteProduct,editProduct, getProductsPage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)