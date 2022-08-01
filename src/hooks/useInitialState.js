import React from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
  const[state, setState] = React.useState(initialState);
  const addToCart = (product) => {
    setState({
        ...state,
        cart: [...state.cart ,product]
    })
  }

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((product,index) => index !== indexValue),
    })
  }

  return {
    state,
    addToCart,
    removeFromCart
  }
}

export default useInitialState