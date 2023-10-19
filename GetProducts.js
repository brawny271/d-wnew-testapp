import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromProduct, removeAllUpload } from './Redux/action';
import './getproducts.css'

function GetProducts() {
    const recivedProducts = useSelector((state) => state.uplodedProducts);

    const dispatch1 = useDispatch()
    const dispatch2 = useDispatch()

    return (
        <div className='container-uploaded'>
            <div className='headline-products'>
                <h2>UPLOADED PRODUCTS</h2>
                <button onClick={() => { dispatch1(removeAllUpload()) }}>Delet All</button>
            </div>
            <div className='uploded-cards'>
             {recivedProducts.map((item, index) => (
                    <div className='card-inside-content' key={index}>
                        <img className='card-inside-img' src={item.image} alt={item.title} />
                        <p className='card-title'>{item.title}</p>
                        <p className='card-price'>$ {item.price}</p>
                        <div className='button-div-container'>
                            <button className='upload-buy-button' onClick={() => { dispatch1(addToCart(item)) }}>Buy</button>
                            <button className='upload-remove-button' onClick={() => { dispatch2(removeFromProduct(item)) }} >Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GetProducts;