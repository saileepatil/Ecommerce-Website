import React from 'react'
import  Shimmer from "./Shimmer"
import {  useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Wishlist} from "./ReducerCart"

function InitialProduct({products,filteredProduct,productName}) {

  let navigate = useNavigate();
  let  dispatch = useDispatch();


  function ShowInitialPrpduct(){
    return <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-4">
   {products.map((product,index) => {
           return  <div 
          className="col mb-4">
             <div className="card h-100 text-center p-4">
               <img src={product?.image} className="card-img-top product-image" />
               <div className="card-body">
                 <h5 className="card-title mb-0">{product?.title?.slice(0,12)}...</h5>
                 <p className='card-text lead fw-bold'> ${product?.price}</p>
                 <button 
                  onClick={ () => {
                    navigate(`/Product/${product?.id}`)
                  }}
                 type="button" class="btn btn-outline-dark">Buy Now</button>
              <button onClick={ () => {

                let wishItem = {
                  Title : product?.title,
                  Price : product?.price,
                  Image :  product?.image
                }
                 dispatch( Wishlist({wishItem}))
                
              
                
              }}
              type="button" class="btn btn-dark ms-2 px-3 ">Wishlist</button>
                 
       
               </div>
             </div>
           </div> 
          })}
       </div>
   }

   function ShowFilteredProduct(){
    return <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-4">
         {filteredProduct.map((product,index) => {
     return  <div
 
     className="col mb-4">
       <div className="card h-100 text-center p-4">
         <img src={product?.image} className="card-img-top product-image" />
         <div className="card-body">
           <h5 className="card-title mb-0">{product?.title?.slice(0,12)}...</h5>
           <p className='card-text lead fw-bold'> ${product?.price}</p>
                 <button
                     onClick={ () => {
                      navigate(`/Product/${product?.id}`)
                    }}
                 type="button" class="btn btn-outline-dark  px-4 py-2">Buy Now</button>
              <button onClick={ () => {

let wishItem = {
  Title : product?.title,
  Price : product?.price,
  Image :  product?.image
}
 dispatch( Wishlist({wishItem}))



}}
type="button" class="btn btn-dark ms-2 px-3 ">Wishlist</button>

         </div>
       </div>
     </div>
    }) }

    </div>
   }

   function ShowShimmerEffect(){
    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-4">
      <Shimmer/>
    </div>
   }

  return (

   <>
 
     {products.length == 0 && filteredProduct.length == 0 ?  < ShowShimmerEffect/> : "" }
   {filteredProduct.length > 0 || productName != "" ? <ShowFilteredProduct/> : <ShowInitialPrpduct/>}



</>
  )
}

export default InitialProduct;