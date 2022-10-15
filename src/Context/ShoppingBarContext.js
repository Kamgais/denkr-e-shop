import React,{createContext} from 'react'


export let toShoppingCart = createContext(false)
export default function ShoppingBarContext(props) {

  return (
    <toShoppingCart.Provider value={true}>
        {props.children}
      
    </toShoppingCart.Provider>
  )
}
