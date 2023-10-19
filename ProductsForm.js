import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToProduct } from './Redux/action';
import './productsform.css';

function Form() {
    const [productData, setProductData] = useState({id: '', image: '', title: '', price: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addToProduct(productData));
        alert('Product Uploaded')
        setProductData({id:'', image: '', title: '', price: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    return (
        <div className='upload-form'>
            <div className='form-head-container'>
                <h2>UPLOAD</h2>
            </div>
            <div className='form-div'>
                <form className='product-form' onSubmit={handleSubmit}>
                    <input className='form-inputs' type="number" name="id" placeholder="Id" value={productData.id} onChange={handleChange} required />
                    <input className='form-inputs' type="text" autoComplete='off' name="image" placeholder="Image URL" value={productData.image} onChange={handleChange} required />
                    <input className='form-inputs' type="text" name="title" placeholder="Product Name" value={productData.title} onChange={handleChange} required />
                    <input className='form-inputs' type="number" name="price" placeholder="Price" value={productData.price} onChange={handleChange} required />
                    <button type="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
}

export default Form;