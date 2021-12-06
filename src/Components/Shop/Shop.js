import React, {useState, useEffect} from 'react';
import Product from './Product';
import Sidebar from './Sidebar';
import './Shop.css'

const Shop = () => {

    const [product, setProduct] = useState([])


    useEffect(() => {

        fetch('http://localhost:8000/products')
        .then((data) => data.json())
        .then((data) => setProduct(data));

    }, [])

    return (
        
        <section className="shop">
            <div className="container">
                <div className="row">
                    <Sidebar></Sidebar>
                    <div className="col-md-8">
                        <div className="product">
                            
                            {
                                product.map((data) => <Product product = {data}></Product>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop;
