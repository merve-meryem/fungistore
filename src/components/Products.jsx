import React, { useState } from 'react'
import data from "../../mushroomdata"
import Product from './Product'

export default function Products() {
 
  return (
    <div className='grid grid-cols-4 gap-2 text-yellow-700'>
       {
        data.map(p=>(
          <Product key={p.id} mushroom={p} />
         ) )
       }
       
    </div>
  )
}
