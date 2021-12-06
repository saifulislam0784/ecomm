import React from 'react';
import './Product.css'

const Product = (data) => {

    return (
        <div className="single_product my-3">

            <div className="card">
                <img src= { data.product.image } alt="" />
                <div className="card-body">
                    <h2>{ data.product.name }</h2>
                    <p>{ data.product.desc }</p>
                    <h5>Price: { data.product.price } BDT</h5>
                    <h5>Saleprice: { data.product.saleprice } BDT</h5>
                    <h6>Stock: { data.product.stock } pcs</h6>
                </div>
            </div>
            
        </div>
    )
}

export default Product;
