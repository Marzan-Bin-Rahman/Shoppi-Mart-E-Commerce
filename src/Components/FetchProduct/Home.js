import React, {useEffect, useState} from 'react'
import Products from './Products'

const Home = () => {
    const [products, setProducts] = useState([])
    const fetchData = () =>{
        fetch('https://taka-marbo-ecommerce-production.up.railway.app/products/')
        .then(res => res.json())
        .then((products) => setProducts(products))
    }
    useEffect(()=>{
        fetchData()
      }, [])
      
  return (
    <div>
        <Products products={products}/>
    </div>
  )
}

export default Home