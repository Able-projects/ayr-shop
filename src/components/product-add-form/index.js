import React, {useState} from 'react'
import './form.css';
import ProductList from "../product-list"
function ProductAddForm(props) {

    const [formData, setFormData] = useState({
        id: ``,
        name: ``,
        price: ``,
        origin: ``
    })

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const addProduct = () => {
        props.addNewProduct(formData)
        setFormData({
            id: ``,
            name: ``,
            price: ``,
            origin: ``
        })
    }

    return (
        <div className="product-form">
            <input name="id" value={formData.id} onChange={onChange} placeholder="Enter id"/>
            <input name="name" value={formData.name} onChange={onChange} placeholder="Enter name"/>
            <input name="price" value={formData.price} onChange={onChange} placeholder="Enter price"/>
            <input name="origin" value={formData.origin} onChange={onChange} placeholder="Enter origin"/>
            <button onClick={addProduct}>Add Product</button>
           
        </div>
    )
}

export default ProductAddForm;