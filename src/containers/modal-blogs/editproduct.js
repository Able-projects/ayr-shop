import React, {useState, useEffect} from 'react';
import { Modal, Form, Input, Select, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import './modal.css';
import {getCategories, getColors, getSizes,getProducts, editProduct} from '../../store/actions/productActions'
const {Option} = Select

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  const onMount = props => () => {
    props.getCategories()
    props.getColors()
    props.getSizes()
    props.getProducts()
  }

    
function EditProduct(props) {
  const {modalBlogVisible, close, productReducer} = props
  const [visible, setVisible] = useState(modalBlogVisible)
  const [imageUrl, setImageUrl] = useState(``)
  const [loading, setLoading] = useState(false)
  const {sizes,categories,colors } = productReducer
  const {products} = props.productReducer
  const filteredList = products.filter(item =>  item.id === props.productID )
  console.log("id in edit: " + props.productID)
  let title1 = ``
  let description1 = ``
  let price1 = ``
  let discountprice1 = ``
  let category1 = null
  let color1 = []
  let size1 = []
  let image1 =  null
  filteredList.map(item => {
    title1 = item.title
    description1 = item.description
    price1 = item.price
    discountprice1 = item.discountprice
    category1 = item.category.name
    color1 = item.colors.name
    size1 = item.sizes.name
    image1 = item.image
  })
  
  const [formData, setFormData] = useState({
    title: ``,
    description: ``,
    price: ``,
    discountprice: ``,
    category: null,
    colors: [],
    sizes: [],
    image: null,
    id: props.productID
  })
  

  useEffect(() => {
    setVisible(modalBlogVisible)
  }, [modalBlogVisible])


  useEffect(onMount(props), [])

  const handleOk = () => {
    props.editProduct(formData)
  //   setFormData({
  //     title: ``,
  //     description: ``,
  //     price: ``,
  //     discountprice: ``,
  //     category: null,
  //     colors: [],
  //     sizes: [],
  //     image: null,
  //     id: null
  // })
  close();
  };

  const onFinish = values => {
    console.log(values);
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  
  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value, id: props.productID })
  }
console.log("id in edit:" + props.productID )
  const categoryChange = value => {
    setFormData({...formData, category: value})
  }

  const colorChange = value => {
    setFormData({...formData, colors: value})
  }
  const sizeChange = value => {
    setFormData({...formData, sizes: value})
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const fileChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => {
          setLoading(false);
          setImageUrl(imageUrl)
      });

      setFormData({...formData, image: info.file.originFileObj})
    }
  }


  return (
    <Modal
        title="Add Product"
        visible={visible}
        onOk={handleOk}
        onCancel={close}
    >

        <Form layout="vertical" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['blog', 'title']} label="Title" rules={[{ required: true }]}>
            <Input name= 'title' value={formData.title} onChange={handleChange} defaultValue = {title1}/>
        </Form.Item>
        
        <Form.Item name={['blog', 'price']} label="Price" rules={[{ required: true }]}>
            <Input name= 'price' value={formData.price} onChange={handleChange} defaultValue = {price1} />
        </Form.Item>
        <Form.Item name={['blog', 'discountprice']} label="Discount Price" rules={[{ required: true }]}>
            <Input name= 'discountprice' value={formData.discountprice} onChange={handleChange}  defaultValue = {discountprice1}/>
        </Form.Item>
        <Form.Item name={['blog', 'description']} label="Description">
            <textarea name= 'description' value={formData.description} onChange={handleChange} className="textarea">
            {description1}
              </textarea> 
        </Form.Item>

        <Form.Item name={['blog', 'category']} label="Category">
            <Select name="category" onChange={categoryChange} defaultValue={category1}>
            {categories.map(item => (<Option value={item.id}>{item.name}</Option>))}
            </Select>
        </Form.Item>

        <Form.Item name={['blog', 'colors']} label="Colors">
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Select color"
                onChange={colorChange}
                optionLabelProp="label"
                defaultValue={color1}
            >
                 {colors.map(item => (<Option value={item.id} label={item.name}>
                  <div className="demo-option-label-item">
                  <img  src={item.image} className='colorimg' />
                      {item.name}
                  </div>
                </Option>))}
            </Select>
        </Form.Item>

        <Form.Item name={['blog', 'sizes']} label="Sizes">
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Select sizes"
                onChange={sizeChange}
                optionLabelProp="label"
                defaultValue={size1}
            >
                 {sizes.map(item => (<Option value={item.id} label={item.name}>
                  <div className="demo-option-label-item">
                      {item.name}
                  </div>
                </Option>))}
            </Select>
        </Form.Item>

        <Form.Item>
            <Upload
                name="image"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={fileChange}
                imageUrl = {image1} 
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        </Form.Item>
        </Form>

    </Modal>
  );
}

const mapStateToProps = state =>({
  productReducer: state.productReducer
})

const mapDispatchToProps = {
  getCategories,
  getColors,
  getSizes,
  editProduct,
  getProducts
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProduct)
