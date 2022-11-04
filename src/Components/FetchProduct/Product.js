import React from 'react'

const Product = (props) => {
    const {id, title, description, price, image} = props.product;
  return (
    <div>
        <h1 className="text-3xl font-bold underline">{title}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
        <img src='https://via.placeholder.com/300.png/3C2317/fff' alt="this is a beautiful project"/>
    </div>
  )
}

export default Product