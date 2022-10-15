import React,{useState,useRef} from 'react'
import { removeInWarenkorb,changeInWarenkorb } from '../../redux/actions/action'
import {useSelector,useDispatch} from 'react-redux'
import './ShoppingCart.css'


export default function ShoppingCart(props) {
 

const storeState = useSelector(state=>state)
const dispatch= useDispatch()
const[edit,setEdit] = useState({
    value : null,
    display: false
})


const changed = useRef()


// totalPrice variable
let totalprice = 0 ;

// editProduct method
const editProduct = (element)=>{

  setEdit({
    value : element,
    display : true
  })
 
 
}

// valueToChanged function

const valueToChanged = ()=>{
  dispatch(changeInWarenkorb(edit.value.item,changed.current.value))
  setEdit({
    value : null,
    display: false
  })
}



// backToCart method
const backToCart = ()=>{
  setEdit({
    value : null,
    display: false
  })
}



storeState.warenkorbList.forEach(element=>{
  totalprice = totalprice + element.item.price*element.number
})



 return (

  <>

<div className='overlay'>
        <div className='warenkorb-section'>
          <div 
          onClick={props.handleShoppingBar}
          className='close-btn'>
          <i className="fa-solid fa-xmark"></i> 
          </div>
          <div>
            <h1>Mein Warenkorb</h1>
          </div>

          <div className='warenkorb-list'>

          {
   storeState.warenkorbList.map(element=>
    (
         <div
         key={element.item.id} 
         className='product-box'>
        <div className='img-box'>
              <img src={element.item.image}/>
        </div>

        <div className='text-box'>
          <h3>{element.item.price}€</h3>
          <h3>Anzahl :{element.number <10? `0${element.number}`:element.number }</h3>
          <p>{element.item.title}</p>
          <button>Zu Favoriten hinzufügen</button>

        </div>

        <div className='icons-box'>
        <i 
        onClick={()=>editProduct(element)}
        className="fa-solid fa-pen-to-square"></i>
        <i 
        onClick={()=>dispatch(removeInWarenkorb(element.item))}
        className="fa-solid fa-trash-arrow-up"></i>
        </div>
        
        </div> 
    )
    )
 }

          </div>

          <div className='total-price'>
            <p>Gesamt : <span>{totalprice===0?"00,00":totalprice.toFixed(2)}€</span></p>
          </div>

          <div className='command-btn'>
            <button>BESTELLUNG ABSENDEN</button>
          </div>


 
  </div>

  

 {
   edit.display=== true &&
   (

    <>

    <div className='edit-section'>
    <div className='change-btn'>
    <i 
    onClick={backToCart}
    className="fa-solid fa-angle-left"></i>
    <p>Ändern</p>
    </div>
 
    <div className='warenkorb-list'>
 
     <div className='product-box'>
  <div className='img-box'>
        <img src={edit.value.item.image}/>
  </div>
 
  <div className='text-box'>
    <h3>{edit.value.item.price}€</h3>
   <p>{edit.value.item.title}</p>
    
  </div>
 </div> 

<div className='value-changed'>
  <input
  min='1'
  ref={changed}
  
  type='number'/>
</div>
  </div>
 
  <div className='command-btn save-btn'>
      <button
      onClick={valueToChanged}
      >SPEICHERN</button>
    </div>
 
 
 
 </div>
 </>
  ) 
   }


 
  </div>


 </>
 )
 
  }
