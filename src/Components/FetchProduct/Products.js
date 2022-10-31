import React from 'react'
import Product from './Product';

const Products = (props) => {
    const {products} = props;
  return (
    <div>
        {products.map(product =><Product product={product} key={product.id}/>)}
    </div>
  )
}

export default Products