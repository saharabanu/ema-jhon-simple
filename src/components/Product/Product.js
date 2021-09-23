import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import Rating from 'react-rating';
import './Product.css';




const Product = (props) => {
    console.log(props)
    const {img,name,seller,price,stock,star}=props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product">
            <div>
                <img src={img}alt="" />
            </div>
           <div className="product-detail">
               <h4 className="product-name">{name}</h4>
               <p><small>by:{seller}</small></p>
               <p>Price:{price}</p>
               <p><small>only {stock} left in stock - order soon</small></p>
               
               {/* <Rating initialRating={star}
               emptySymbol="far fa-star icon-color"
               fullSymbol="fas fa-star icon-color"
               readonly></Rating>
               <br /> */}
               <button onClick={()=>props.handleAddToCart(props.product)}
               className="btn-regular">{cartIcon}add to Cart</button>
           </div>
        </div>
    );
};

export default Product;