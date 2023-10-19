import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuentity,
  decreaseQuentity,
  removeFromCart,
  removeAllCart,
} from "./Redux/action";
import { getItemQuentity } from "./selected";
import "./carts.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart, "sajfkl");

  // const counts = useSelector((state)=> state.count)
  const [cartData, setCartData] = useState(cart);

  const handleTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => (total += parseFloat(item.total)));
    return total.toFixed(2);
  };
  // useEffect(() => {
  //  return cart
  // }, [cart]);
  // const productQuentity = useSelector((state)=> state.totalQuentity)

  const dispatch = useDispatch();

  //   const calculateTotal = () => {
  //     let totalFetch = 0;
  //     cart.forEach((item) => totalFetch += item.price);
  //     setTotalPrice( totalFetch);
  //   };

  // const handleIncr = () => {
  //     if(quentity < 5){
  //     setQuentity(prevQuentity => prevQuentity + 1);
  // }

  // }

  // const handleDecrease = () => {
  //     if (quentity > 1) {
  //         setQuentity(prevQuentity => prevQuentity - 1);
  //     }
  // }


  return (
    <div className="main-container">
      <div className="cart-title">
        <h2 className="title-name">ITEMS IN CART</h2>
        <button
          className="clear-all-button"
          onClick={() => {
            dispatch(removeAllCart());
          }}
        >
          Clear All
        </button>
      </div>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div>
            <tr>
              {/* <th>No</th>
                            <th>PRODUCT</th>
                            <th>NAME</th>
                            <th>Quentity</th>
                            <th>PRICE</th>
                            <th></th> */}
            </tr>
            {cartData.map((item) => (
              <tr key={item.id}>
                {/* <td>{item+1}</td> */}
                <td>
                  <img
                    className="table-img"
                    src={item.image}
                    alt="product-image"
                  />
                </td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>Q. {item.total}</td>
                {/* <td>{(meriQuentity)}</td> */}
                <td>{item.quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch( increaseQuentity(item));
                    }}
                  >
                    +
                  </button>
                  <button
                    className="removr-button"
                    onClick={() => {
                      dispatch(removeFromCart(item));
                    }}
                  >
                    Remove
                  </button>

                  <button
                    onClick={() => {
                      dispatch(decreaseQuentity(item));
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
            <tr className="total-amount">
              {/* <button onClick={handleTotalPrice()}></button> */}
              <th>Total Amount: $ {handleTotalPrice()}</th>
            </tr>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
