


import React,{useEffect,useState,createContext} from 'react'

export const listContext = createContext()

export default function ProductListContext(props) {

  const [productList,setProductList] = useState([]) 
  const [productListFixed, setProductListFixed] = useState([])

  useEffect(()=>{

    async function fetchData () {

      let response = await fetch('https://fakestoreapi.com/products')
      let data = await response.json()
     // console.log(data)
        
      setProductList(await data)
      setProductListFixed(await data)
      
     

    }


    fetchData()

    },[])


    

    const filtering = (element)=>{
      if(element!=="") {
        let dataFiltred = productListFixed.filter((item)=>item.title.trim().toLowerCase().replace(" ","").startsWith(element))
          // console.log(productListFixed)
        setProductList(dataFiltred)
      }
       
      else {
        setProductList(productListFixed)
      }
      
    }


 

  
  return (
    <listContext.Provider value={{productList,filtering}}>

      {props.children}
      
    </listContext.Provider>
  )
}
