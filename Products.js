import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import   {addToCart }  from './Redux/action';
import './Products.css';

const Product = () => {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => {
            console.log("error",error)
        })

    }, [dispatch]);

    return (
        <div className='products-container'> 
            {products.map((product) => (
                <div className='card-list'>
                <div className="card-content" key={product.id}>
                    <img src={product.image} alt="img" />
                    <h2 className='product-title'>{product.title}</h2>
                    <p className='product-price'>${product.price}</p>
                    <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                </div>
                </div>
            ))}
        </div>
    );
};

export default Product;