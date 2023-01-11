import React from 'react';
import './table.css';
import Row from './row'
import ProductAddForm from '../product-add-form'
function ProductList(props) {

  const list = props.products.map(item => 
    ( <Row key={item.id} item={item} deleteProduct={() => props.deleteProduct(item.id)} 
     changeEditMode = {() => props.changeEditMode(item.id)} editProduct={(e) => props.editProduct(e,item.id)}/> ))
 
  return (
    <div className="table">
      <ProductAddForm />
       {list}
    </div>
  );
}

export default ProductList;
