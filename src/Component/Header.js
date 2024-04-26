import React from 'react'
import { Link , NavLink} from "react-router-dom"
import {useSelector} from 'react-redux'

function Header({productName,setProductName, isLoggedIn,setIsLoggedIn}) {


 let cartItems =  useSelector( (state) => {
     return  state.cartItems;
  });

  let wishItems =  useSelector( (state) => {
    return  state.wishItems;
 });


  return (
    <><nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="#">
      GENZY
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to = "/" > <a class="nav-link active" aria-current="page" >Home</a> </Link> 
        </li> 
        
        <li class="nav-item">
         <Link to = "/Product" > <a class="nav-link active" aria-current="page"  >Product</a> </Link> 
        </li> 
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a> 
        </li> 
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input
        value={productName}
        onChange={ (e) => {
          setProductName(e.target.value)
        }}
        class="form-control me-2" type="search" placeholder="Search Product" aria-label="Search"/>
        <div className='login-btn'>


        
      {isLoggedIn == true ?
      <Link to = "/login"> <button
      onClick={() => {
        setIsLoggedIn(false)
        localStorage.setItem( "isLoggedIn" , true)
      }}
     class="btn btn-outline-dark ms-2">
      <span>  <i class="fa-solid fa-right-to-bracket"></i></span>
     </button></Link>


 : 
   <div className='login-btn'>
   
<button
      onClick={() => {
        setIsLoggedIn(true)
        localStorage.setItem( "isLoggedIn" , false)

      }}
  class="btn btn-outline-dark ms-2">
   <span><i class="fa-solid fa-right-from-bracket"></i>
     </span>
   </button>
   </div>  }

      
        <div className='login-btn'>
        <Link to = "/register"><button class="btn btn-outline-dark ms-2">
        <span>   <i class="fa fa-user-plus me-1 "></i></span>
       </button></Link>
       </div>
        
        {/* <Link to = "/wish"><div className='login-btn'>
        <button class="btn btn-outline-dark ms-2">
        <span>  <i class="fa-solid fa-heart"></i></span>
       </button>
       </div> </Link> */}

       <Link to = "/wish"><button type="button" class="btn btn-outline-dark ms-2 position-relative">
        <span><i class="fa-solid fa-heart me-1 "></i> </span>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        { wishItems?.length}
          </span>
         </button></Link>

       <div className='login-btn'>
        {/* <button class="btn btn-outline-dark ms-2"> */}
        {/* <span><i class="fa fa-shopping-cart me-1 ">{cartItems.length}</i> </span> */}
        {/* </button> */}
        <Link to = "/cart"><button type="button" class="btn btn-outline-dark ms-2 position-relative">
        <span><i class="fa fa-shopping-cart me-1 "></i> </span>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           {cartItems?.length}
          </span>
         </button></Link>
       </div>
       </div>
      </form>
    </div>
  </div>
</nav>















    </>
  )
}

export default Header;