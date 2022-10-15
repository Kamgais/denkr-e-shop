import React,{useContext,useState,useRef} from 'react'
import {Link} from 'react-router-dom'
import { toShoppingCart } from '../../Context/ShoppingBarContext'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import Login from '../Login/Login'
import './Navbar.css'
import { listContext } from '../../Context/ProductListContext'







export default function Navbar() {

const [toShoppingC,setToShoppingC] = useState(false)
const {productList,filtering} = useContext(listContext)
const input = useRef()

  const  handleShoppingBar= ()=>{
    setToShoppingC(toShoppingC=>!toShoppingC)
    
  }

  const handleFilter = ()=>{
  // console.log(input.current.value, typeof(input.current.value)) 
     filtering(input.current.value.trim().toLowerCase().replace(" ",""))
  }



  return (
    <>

    <header>

        <nav>
         
         <h1 className='logo-name'>DENKR</h1>


         <form>
             <label htmlFor='suche'><i className="fa-solid fa-magnifying-glass"></i></label>
             <input
             ref={input}
             onChange={handleFilter}
             type='text'
             id='suche'
             placeholder='SUCHEN'/>
         </form>

        <ul>
            <li><Link to="/"><i className="fa-solid fa-circle-user"></i></Link></li>
            <li><Link to="/favorites"><i className="fa-solid fa-heart"></i></Link></li>
            <li><i className="fa-solid fa-cart-shopping" 
            onClick={handleShoppingBar}></i></li>
        </ul>

        </nav>
    </header>


    {toShoppingC? <ShoppingCart handleShoppingBar = {handleShoppingBar}/> :""}
   

</>


      
   
  )
}
