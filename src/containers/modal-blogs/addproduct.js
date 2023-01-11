import React, {useState, useEffect} from 'react';
import { Modal, Form, Input, Select, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import {getCategories, getColors, getSizes, saveProduct} from '../../store/actions/productActions'
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
  }
    
function AddProduct(props) {
  const {modalBlogVisible, close, productReducer} = props
  const [visible, setVisible] = useState(modalBlogVisible)
  const [imageUrl, setImageUrl] = useState(``)
  const [loading, setLoading] = useState(false)
  const {sizes,categories,colors } = productReducer
  const [formData, setFormData] = useState({
    title: ``,
    description: ``,
    price: ``,
    discountprice: ``,
    category: null,
    colors: [],
    sizes: [],
    image: null
  })

  useEffect(() => {
    setVisible(modalBlogVisible)
  }, [modalBlogVisible])


  useEffect(onMount(props), [])

  const handleOk = () => {
    props.saveProduct(formData)
    setFormData({
      title: ``,
      description: ``,
      price: ``,
      discountprice: ``,
      category: null,
      colors: [],
      sizes: [],
      image: null
  })
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
    setFormData({...formData, [e.target.name]: e.target.value})
  }

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
            <Input name= 'title' value={formData.title} onChange={handleChange}/>
        </Form.Item>
        
        <Form.Item name={['blog', 'price']} label="Price" rules={[{ required: true }]}>
            <Input name= 'price' value={formData.price} onChange={handleChange} />
        </Form.Item>
        <Form.Item name={['blog', 'discountprice']} label="Discount Price" rules={[{ required: true }]}>
            <Input name= 'discountprice' value={formData.discountprice} onChange={handleChange} />
        </Form.Item>
        <Form.Item name={['blog', 'description']} label="Description">
            <Input.TextArea name= 'description' value={formData.description} onChange={handleChange} />
        </Form.Item>

        <Form.Item name={['blog', 'category']} label="Category">
            <Select name="category" onChange={categoryChange}>
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
  saveProduct
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct)
