import React from 'react';
import './row.css';
import Cell from '../cell'
function Row(props) {
  return (
    <div className="row">
      {  props.item.isinEditMode ? 
        <div>
          <input type="text" name="id" defaultValue={props.item.id} onChange={props.editProduct} />
        </div>  :
      <button className="textbtn"  onClick={() => props.changeEditMode()}><Cell value={props.item.id}/></button>
      }
      {  props.item.isinEditMode ? 
        <div>
          <input type="text" name="name" defaultValue={props.item.name} onChange={props.editProduct}/>
        </div>  :
      <span onClick={() => props.changeEditMode()}><Cell value={props.item.name}/></span> 
      }
      {  props.item.isinEditMode ? 
        <div>
          <input type="text" name="price" defaultValue={props.item.price} onChange={props.editProduct}/>
        </div>  :
       <span onClick={() => props.changeEditMode()}><Cell value={props.item.price}/></span>
      }
      {  props.item.isinEditMode ? 
        <div>
          <input type="text" name="origin" defaultValue={props.item.origin} onChange={props.editProduct}/>
        </div>  :
       <span onClick={() => props.changeEditMode()}><Cell value={props.item.origin}/></span>
}      
       <button className="deletebtn" onClick={() => props.changeEditMode()}><img src="https://img.icons8.com/ios/24/000000/edit.png" alt="Update"/></button>
       <button className="deletebtn" onClick={() => props.deleteProduct()}><img src="https://img.icons8.com/officexs/16/000000/delete-sign.png" alt="Delete"/></button> 
    </div>
  );
}

export default Row;
