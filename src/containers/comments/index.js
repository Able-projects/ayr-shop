import React,  {useState,useEffect}  from 'react';
import { Row, Col , Input, Form, Button} from 'antd';
import './comments.css';
import { connect } from 'react-redux'
import {getComments,saveComment,deleteComment,editComment } from '../../store/actions/productActions'
import {UserOutlined,DeleteTwoTone,EditTwoTone } from '@ant-design/icons'

const onMount = props => () => {
  props.getComments()
}

function Comments(props) {
useEffect(onMount(props), [])
const {isAuth,  currentUserId } = props.authReducer
const [isEdited, setEdited] = useState(false)
const {comments} = props.productReducer
let editedComment = null


const deleteComment =  (id) =>{
  props.deleteComment(id)
}
const [editedID, setEditedID] = useState(null)
const editComment =  (cid) =>{
  setEdited(true)
  setEditedID(cid)
}
const [editformData, seteditFormData] = useState({
  text: ``,
  id: editedID,
  product: props.productId
})

console.log("iddd:" + editedID)
comments.filter(item =>{
  if (item.id === editedID){
     editedComment = item.text
  } 
}) 

const onEditSubmit = () => {
  props.editComment(editformData)
  setEdited(false)
  seteditFormData({
    text: ``,
    product: props.productId,
    id: editedID
})
};
const edithandleChange = e => {
  seteditFormData({...editformData, [e.target.name]: e.target.value,  id: editedID })
}


const filteredList = comments.filter(item =>  item.product.id === props.productId)
const commentsList = filteredList.map(item => (
  <div className='comment-row'>
    <Row >
        <UserOutlined span={2}> </UserOutlined> 
        <Col span={8}><b>{item.author.username}</b></Col>
        <Col span={12}><p className='psmall'>{item.created_on}</p></Col>
        {(isAuth && currentUserId ==  item.authorId) ? 
       <Col>
        <button className="deletebtn"  onClick={() => { deleteComment(item.id)} }>
            <DeleteTwoTone />
        </button>
        <button className="deletebtn"  onClick={() => { editComment(item.id)} }>
            <EditTwoTone />
        </button>
       </Col>  : null }
    </Row>
    <Row >
      <Col span={24}><p className='pmedium'> {item.text}</p></Col>
    </Row>
  </div>
  
))
  const [formData, setFormData] = useState({
    text: ``,
    product: props.productId
  })

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const onSubmit = () => {
    props.saveComment(formData)
    setFormData({
      text: ``,
      product: props.productId
  })
  };
  const unAuthForm = (
    <div className='undiv'>
         To add comment you need to log in
    </div>
      
  );

  const authForm = (
     isEdited ? 
    <div className="comments-form">
        <Form.Item>
             <textarea rows={3} onChange={edithandleChange} name='text' defaultValue={editedComment} >
              </textarea>
        </Form.Item> 
        <Form.Item>
            <Button htmlType="submit" onClick={onEditSubmit} type="secondary">
                Update Comment
            </Button>
        </Form.Item>
     </div> :
     <div className="comments-form">
     <Form.Item>
          <textarea rows={3} onChange={handleChange} name='text' defaultValue=""/>
     </Form.Item>
     <Form.Item>
         <Button htmlType="submit" onClick={onSubmit} type="secondary">
             Add Comment
         </Button>
     </Form.Item>
  </div> 
  );

  return (
    <div className='comments'>
        {commentsList}
        {isAuth ? authForm : unAuthForm}
    </div>
  );
}

const mapStateToProps = state =>({
  productReducer: state.productReducer,
  authReducer: state.authReducer
})

const mapDispatchToProps = {
  getComments, saveComment, deleteComment, editComment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)