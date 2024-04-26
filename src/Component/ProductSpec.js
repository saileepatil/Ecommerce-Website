import React,{ useEffect,useState } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {AddToCart} from "./ReducerCart"
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'



function ProductSpec() {
  
  let  dispatch = useDispatch();
  let obj = useParams();
  

  let [productData,setProductData] = useState(null);



  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${obj.id}`)
    .then((res) => {
      setProductData(res.data)
    })
  } , [] )

  return (
    <div>
        
 <h style={{ textAlign : "center" , marginTop : "150px"}}> </h>

{productData != null ? <div id='ProductSpecWrapper'>

  
<div class="card mb-3" >
  <div class="row g-5">
    <div class="col-md-4">
      <img src={productData.image} class="img-fluid rounded-start SpecWra-img" />
    </div>
    <div class="col-md-8">
      <div className=''>
      <h4 class="text-uppercase text-black-50">{productData.category} </h4>
        <h1 class="display-5">{productData.title} </h1>
        <p class="lead fw-bolder">Rating {productData.rating && productData.rating.rate} <i className='fa fa-star'></i></p>
        <h3 class="display-6 fw-bold my-4">${productData.price} </h3>
          <p className='lead'>{productData.description}</p>
          <button 
          onClick={ () => {

            let cartItem = {
               Title : productData.title,
               Price : productData.price,
               Image : productData.image
            }
            dispatch(AddToCart({cartItem}))
            
          }}
          
          type="button" class="btn btn-outline-dark px-4 py-2">AddToCart</button>
           
         <Link to = "/cart"> <button type="button" class="btn btn-dark ms-2 px-3">GoToCart</button></Link>
          
          </div>
      </div>
    </div>
  </div>
  

</div> : "" }



        </div>
  )
}

export default ProductSpec;