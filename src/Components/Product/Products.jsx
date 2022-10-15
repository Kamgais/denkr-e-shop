import React,{useState,useEffect, SetStateAction,useContext} from 'react'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import './Product.css'
import { listContext } from '../../Context/ProductListContext'
import { Link } from 'react-router-dom'
import { toShoppingCart } from '../../Context/ShoppingBarContext'









export default function Products() {


  const {productList}= useContext(listContext)
 let toShoppingC = useContext(toShoppingCart)

  

  
return (

    <>


    <h1 className='title-products'>Products</h1>
    <div className='products-list'>

    {  

      productList.map((item)=>(

        <Link 
        className='link'
        to = {`/products/${item.id}`}

        key= {item.id}
        >

        <div 
        className='product-card'>

        <div className='img-block'>


         

        <img 
          src={item.image} alt='image products'/>

        </div>
          <div className='infos-block'>
            <div className='text-infos'>

              <p  className='product-title'>{item.title}</p>
          
              <p className='product-price'>{item.price}€</p>

            </div>

            <div className='icons-favorites'>
               
            <i className="fa-solid fa-heart"></i>
              
            </div>
          </div>
        

      </div>


      </Link>


      ))

   

     

}
      
    </div>



    </>
  )
}
