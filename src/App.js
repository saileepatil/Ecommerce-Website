import React, {useState} from "react"
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import Header from "./Component/Header"
import Home from "./Component/Home"
import ProductSpec from "./Component/ProductSpec"
import ProductCard from "./Component/ProductCard"
import Cart from "./Component/Cart"
import Login from "./Component/Login"
import Wish from "./Component/Wish"
import  Register from "./Component/Register"

function App() {

  let [productName,setProductName] = useState("");
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <>
    
    
    
     <BrowserRouter>

     <Header
    productName = {productName}
    setProductName = {setProductName}
    isLoggedIn = {isLoggedIn}
    setIsLoggedIn = {setIsLoggedIn}
    /> 
     <Routes>
       
     
     
      <Route path="/" element={<Home
      productName = {productName}
      /> } /> 
      <Route path="/Product/:id" element = {<ProductSpec/>} />
      <Route path="/Product" element = {<ProductCard/>}/>
     <Route path="/cart" element = {<Cart/>}/>
     <Route path="/wish" element = {<Wish/>}/>
    <Route path="/login" element = {<Login
    isLoggedIn = {isLoggedIn}
    setIsLoggedIn = {setIsLoggedIn}
    />}/>
    <Route path="/register" element =  {<Register/>}/> 
     


     </Routes>
     </BrowserRouter>
    

      
     
     </>   
  )
}

export default App