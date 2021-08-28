import React, { Component } from 'react';
import Counter from './Counter';

class Product extends Component {
    
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="data:image/jpeg;base64,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" alt="product-image" />
                </div>
                <p className="product-title">Processor AMD Ryzen 9 2500U 3.5 Ghz</p>
                <p className="product-price">Rp. 9,000,000</p>
                <Counter/>
            </div>

        )
    }
}

export default Product;