import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]
     

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload)

    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [])

  const addToCart = product => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }
  const clearCart = id => {
    dispatch({ type: 'CLEAR_CART', payload: id })
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
