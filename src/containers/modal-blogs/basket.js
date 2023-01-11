import React, {useState, useEffect} from 'react';
import { Modal, Row,Col, Button } from 'antd';
import { connect } from 'react-redux'
import './modal.css';

import {getCategories,deleteCard, getColors, getSizes, getMyBasket} from '../../store/actions/productActions'
import {DeleteTwoTone } from '@ant-design/icons'
const onMount = props => () => {
    props.getCategories()
    props.getColors()
    props.getSizes()
    props.getMyBasket()
  }
function BasketModal(props) {
  useEffect(onMount(props), [])
  const {modalBasketVisible, close} = props
  const [visible, setVisible] = useState(modalBasketVisible)
  const {sizes,categories,colors,basket } =  props.productReducer
  useEffect(() => {
    setVisible(modalBasketVisible)

  }, [modalBasketVisible])
  const deleteCard =  (id) =>{
      props.deleteCard(id)
  }

  let mybasket = []
  console.log("My: " + basket)
  let total = 0;
  if (basket != null ){
    mybasket = basket.map((item) => (
    <div>
       <div className="totald">
       {total+=item.product.discountprice}
       </div>
      <Row>
          <Col span={8}>
              <img alt="inbasket" className="inbasket" src={item.product.image || '/images/c1.png'}  />
          </Col>
          <Col span={13}>
              <Row>
                    <p className='bt'>{item.product.title}</p>
              </Row>
              <Row>
                    {item.product.sizes.map(size => (<a className='bsize'>{size.name}</a>))}
              </Row>
          </Col>
          <Col span={3}>
              <button className="deletebtn" onClick={() => {deleteCard(item.id)}} ><DeleteTwoTone /></button>
              <p className='bsize'>{item.product.discountprice}$</p>
              
          </Col>
      </Row>
      </div>
  ))
    }
  return (
    <Modal
        title="My Cards"
        visible={visible}
        onCancel={close}
        width={700}
        footer={[
            <Button key="submit" className="savebtn" >
              Checkout
            </Button>,
          ]}
    >
        <div>
            {mybasket}
            <hr/>
            <p className="bt t">Subtotal: {total}$</p>
        </div>
    </Modal>
  );
}



const mapStateToProps = state => ({
    productReducer: state.productReducer
})
const mapDispatchToProps = {
    getCategories,
    getColors,
    getSizes,
    getMyBasket,
    deleteCard
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketModal)
