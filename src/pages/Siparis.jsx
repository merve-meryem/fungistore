import React from 'react'
import Products from '../components/Products'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'


export default function Siparis() {

 const { login,isAuthenticated,user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated ) {
      navigate('/login' )
    }
  }, [login])
  
  return (
    <div  >
      
      <div>
        <h2 className='text-2xl font-bold pt-3 text-lime-500'>Ürünlerimiz</h2>
      <Products/>
      </div>
      
    </div>
  )
}
