import React,{useState,useContext,useRef} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { listContext } from '../../Context/ProductListContext'
import { initialState } from '../../redux/reducers/Warenkorbreducer'
import warenkorbList from '../../redux/reducers/Warenkorbreducer'
import { useParams } from 'react-router-dom'
import './ProductShowCase.css'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { putInWarenkorb, updateInWarenkorb } from '../../redux/actions/action'
import { toShoppingCart } from '../../Context/ShoppingBarContext'






 function ProductShowCase() {

  const storeState = useSelector(state => state)

  const [state,setState] = useState(0)


    
   
  const dispatch = useDispatch()
       
    const {productList} = useContext(listContext)
    const numberOfProducts = useRef()
    const {id} = useParams()

    const item = productList.find(item=>item.id==id)


    // Changing Value from Input (NumberOfProducts)

    const handleChange = ()=>{
      setState(numberOfProducts.current.value)

    }


    // Clicked of button => IN WARENKORB LEGEN
  const handleShop = ()=>{

    // Pop-up (in Cart gelegt)
    const pop_up = document.querySelector('#pop-up')
     pop_up.style.display = "block";

     setTimeout(()=>{
       pop_up.style.display = "none";
     },300)


     const key = storeState.warenkorbList.findIndex(element => element.item.id === Number(id))
    
    if(key!==-1) {

    dispatch(updateInWarenkorb(item,Number(numberOfProducts.current.value)))
    
} 
   else if(key === -1 && numberOfProducts.current.value > 0) {
     dispatch(putInWarenkorb(item,Number(numberOfProducts.current.value)))
}

  }


   return (
    <>
    <div className='product-showcase'>

      <div className='product-block'>
      <img src={item.image}/>
      </div>

      <div className='descriptions'>

      <p>{item.title}</p>
          
          <p className='product-price'>{item.price}€</p>
          <p>Ref 0940/450/800</p>

          <p className='product-description'>{item.description}</p>


          <div className='size-btns'>
            <button className='btn-special'>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>

        <div className='numberOfProducts'>

          <input
          onChange={handleChange} 
          ref={numberOfProducts}
          value={state}
          type="number" 
          min="0" 
          placeholder='0'/>

        </div>


             <div className='to-shoppingcart'>

          <button onClick={handleShop}>IN DEN WARENKORB LEGEN</button>
          <i className="fa-solid fa-heart"></i>
         

          </div>

          <p className='pop-up'
             id='pop-up'
          >In Warenkorb gelegt</p>


    </div>
      
    </div>




</>
  )
}




export default ProductShowCase



