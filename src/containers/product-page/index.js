import React , {useState,useEffect} from 'react';
import './page.css';
import { Row, Col } from 'antd';
import Header from '../header'
import Footer from '../footer'
import { Select ,Button} from 'antd';
import ModalBlog from '../modal-blogs'
import SizeModalBlog from '../modal-blogs/size-modal'
import { connect } from 'react-redux'
import {getProducts,addToBasket,getMyBasket} from '../../store/actions/productActions'
import Comments from '../../containers/comments'
const { Option } = Select;

const onMount = props => () => {
  props.getProducts()
  props.getMyBasket()
}

function ProductDetails(props) {
  const [modalBlogVisible, setModalBlogVisible] = useState(false)
  const {isAuth, currentUserId } = props.authReducer

  const openModal = () => {
    setModalBlogVisible(true)
  }

  const closeModal = () => {
    setModalBlogVisible(false)
  }

  const [sizemodalBlogVisible, sizesetModalBlogVisible] = useState(false)

  const openModalSize = () => {
    sizesetModalBlogVisible(true)
  }

  const closeModalSize = () => {
    sizesetModalBlogVisible(false)
  }
  useEffect(onMount(props), [])
 
  const addtocard = (id) =>{
    props.addToBasket(id)
  }

const {products} = props.productReducer
const productID = props.location.propsSearch
const filteredList = products.filter(item =>  item.id == productID )
const productList = filteredList.map(item => (
  <Row className="pro-row">
  <Col span={8}>
      <div className="part1">
          <h1 className="h1 hp">{item.title}</h1>
          <p className='fpl'>{item.description}</p>
          <p className='prop'>-> Styled with The Supercool </p>
          <p className='price'>Price - {item.price} $</p>
          <p className='price'>Discount price - {item.discountprice} $</p>
      </div>
  </Col>
  <Col span={8}>
      <div className="part-img">
          <img src={item.image} alt='someimage' />
      </div>
  </Col>
  <Col span={8}>
      <div>
          <form className='detail-form'>
            <div className="h1btn">
              <h3>Which size?</h3>
              <Button onClick={openModalSize}>+</Button>
            </div>
            <div className="h1btn">
              <h3>What's like?</h3>
              <Button onClick={openModal}>+</Button>
            </div>
             
              <Select style={{ width: 240 }} placeholder='Which color?'  optionFilterProp="children">
                  {item.colors.map(color => (<Option value={color.id}><img  src={color.image} className='colorimg'/>{color.name}</Option>))}
              </Select>
              <div className='sizerow'>
                 {item.sizes.map(size => (<a className='size' value={size.id}>{size.name}</a>))}
              </div>
              {isAuth ?
              <button className="addCardbtn" onClick={()=> {addtocard(item.id)}} >Add to card</button>:
              <p>You should login to add to card</p>
              }
          </form>
          
      </div>
  </Col>
</Row>
))
  return (
    
    <div className='product'>
        <Header />
         {productList}
        <Comments productId={productID}/>
        <Footer />
        <ModalBlog modalBlogVisible={modalBlogVisible} close={closeModal}/>
        <SizeModalBlog modalBlogVisible={sizemodalBlogVisible} close={closeModalSize}/>
    </div>
  );
}


const mapStateToProps = state =>({
  productReducer: state.productReducer,
  authReducer: state.authReducer
})

const mapDispatchToProps = {
  getProducts,addToBasket,getMyBasket
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails)