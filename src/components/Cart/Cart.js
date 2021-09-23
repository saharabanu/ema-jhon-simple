import React from 'react';
import './Cart.css';
const Cart = (props) => {
    window.scrollTo(0,40);
    
    const {cart}=props;
    
    

    const totalReducer=(previous,current)=>previous + current.price;
    const total =cart.reduce(totalReducer,0)
    const shippingReducer= (previous,current)=>previous + current.shipping;
    const totalShipping=cart.reduce(shippingReducer,0)
    const totalBeforTax = total +totalShipping;
    const tax =(total + totalShipping) /10;
    const OrderTotal =totalBeforTax + tax;

    
    return (
        <div className="cart">
          <h3>Order Summary</h3>
         <h5>Items Ordered:{props.cart.length}</h5>
         <br />
            <p>Items:${total.toFixed(2)}</p>
            <p>Shipping & Handling:	 ${totalShipping.toFixed(2)}</p>
            <p>Total before tax:  ${totalBeforTax.toFixed(2)}</p>
            <p>Estimated Tax:  ${tax.toFixed(2)}</p>
            <p className="total">Order Total: ${OrderTotal.toFixed(2)}</p>
            <button className="btn-cart">Review Your Order</button>
        </div>
    );
};

export default Cart;