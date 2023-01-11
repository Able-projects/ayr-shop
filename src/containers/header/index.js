import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import './header.css';
import { Row, Col, Menu,Button ,Input} from 'antd';
import {CreditCardFilled } from '@ant-design/icons'
import {Link } from "react-router-dom";
import AddProduct from '../modal-blogs/addproduct';
import BasketModal from '../modal-blogs/basket';
import {getProducts,filterProducts} from '../../store/actions/productActions'
import {getCategories} from '../../store/actions/productActions'
import SignupModal from '../auth/signup'
import LoginModal from '../auth/login'
import {logOut} from '../../store/actions/authActions'
const {Search} = Input


const {SubMenu} = Menu
function Header(props) {
  const {isAuth, currentUserId } = props.authReducer

  const [modalSignupVisible, setModalSignupVisible] = useState(false)
  const [modalLoginVisible, setModalLoginVisible] = useState(false)
  const openLoginModal = () => {
    setModalLoginVisible(true)
  }

  const closeLoginModal = () => {
    setModalLoginVisible(false)
  }

  const openSignupModal = () => {
    setModalSignupVisible(true)
  }

  const closeSignupModal = () => {
    setModalSignupVisible(false)
  }

  const closeSignupOpenLogin = () => {
    closeSignupModal()
    openLoginModal()
  }
  
  const closeLoginOpenSignup = () => {
    closeLoginModal()
    openSignupModal()
  }
  const [modalBlogVisible, setModalBlogVisible] = useState(false)
  
  const openModal = () => {
      setModalBlogVisible(true)
    }
  
  const closeModal = () => {
      setModalBlogVisible(false)
    }
    const [modalBasketVisible, setModalBasketVisible] = useState(false)
  
  const openBasketModal = () => {
    setModalBasketVisible(true)
    }
  
  const closeBasketModal = () => {
    setModalBasketVisible(false)
    }
    useEffect(() => {
      if(props.authReducer.signUpSuccess) {
        closeLoginModal()
      }
      if(props.authReducer.isAuth) {
        closeLoginModal()
      }
  
    }, [props.authReducer.signUpSuccess, props.authReducer.isAuth])
    
    const onSearch = (value) => {
      props.filterProducts(value)
    }
  
    const onChange = (e) => onSearch(e.target.value)
  
    const unAuthMenu = (
      <Button onClick={openLoginModal} className="addbtn">
         <a className="header-icon a" >Login</a>
      </Button> 
    );
  
    const authMenu = (
      <Button onClick={ props.logOut} className="addbtn">
        <a className="header-icon a" >Log Out</a>
      </Button> 
    );
    
    
  const {categories} = props.productReducer
  const filteredList = categories.filter(item =>  item.id != 7 )
  const categoryList = filteredList.map(item => (
      <Menu.Item key={item.id}><Link to={{
        pathname: "/categories",
        propsSearch: item.id }} >{item.name}</Link></Menu.Item>
    ))
  return (
    <div>
      <Row className="header">
        <Col span={8} className="header-menu">
        <Menu  mode="horizontal">
        <SubMenu title={
             <a className="header-icon" >Shop</a>
            }
        >
           {categoryList}
        </SubMenu>
        <Link to='/bestsellers'>
           <p className="header-icon" >Bestsellers</p>
        </Link>
        <Link to='/aboutus'>
           <p className="header-icon" >About us</p>
        </Link>
        <p className="header-icon" >Digital Catalog</p>
        </Menu>
        </Col>
        <Col span={8}>
        <Link to='/'>
        <img className="logo" src="//cdn.shopify.com/s/files/1/1212/1112/t/10/assets/logo-horizontal@2x.png?v=15544557364951493001"/>
        </Link>
        </Col>
        <Col span={8} className="header-menu menu2">
          { props.search ?
        
            <Search
            placeholder="input text"
            onChange={onChange}
            onSearch={onSearch}
            style={{ width: 150 }}
          />:
          <Link to="/search" >
          <a className="header-icon a" >Search</a>
          </Link>
          }
          {(isAuth && currentUserId == 5  ) ? 
          <Button onClick={openModal} className="addbtn">
              <a className="header-icon a" >Add Product</a>
          </Button> : null }
          {isAuth ? authMenu : unAuthMenu}
          <CreditCardFilled onClick={openBasketModal}/>
        </Col>
      </Row>
      <AddProduct modalBlogVisible={modalBlogVisible} close={closeModal}/>
      <SignupModal modalSignupVisible={modalSignupVisible} close={closeSignupModal} openLogin={closeSignupOpenLogin}/>
      <LoginModal modalLoginVisible={modalLoginVisible} close={closeLoginModal} openSignup={closeLoginOpenSignup}/>
      <BasketModal modalBasketVisible={modalBasketVisible} close={closeBasketModal}/>
  
    </div>

  );
}

const mapStateToProps = state =>({
  productReducer: state.productReducer,
  authReducer: state.authReducer
})

const mapDispatchToProps = {
  getProducts, getCategories, logOut, filterProducts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)