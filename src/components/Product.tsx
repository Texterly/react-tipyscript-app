import React from 'react'
import { IProduct } from '../models'

interface ProductProps {
  product: IProduct
}

function Product({ product }: ProductProps) {
  return (
    <div className='border py2 px-4 rounded flex flex-col items-center mb-2'>
      <img src={product.image} alt={product.title} className='w-1/6' />
      <p>{ product.title }</p>
      <span className='font-bold'>{product.price}</span>
    </div>
  )
}

export default Product