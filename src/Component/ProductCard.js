import React,{useEffect , useState} from 'react'
import axios from 'axios';
import  {useNavigate} from 'react-router-dom'
import Shimmer from './Shimmer';
import {useDispatch} from "react-redux";
import {Wishlist} from "./ReducerCart"

function ProductCard() {

  let navigate = useNavigate();
  let  dispatch = useDispatch();


  let [searchProduct,setSearchProduct] = useState([]);

  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then( (res) => {
      setSearchProduct(res.data)
    }).catch((err) => {
     console.log(err)
    })
  },[]) 

const showFilteredResults = (category ) => {

 if( category == "men's clothing"){
 let result = searchProduct.filter((item,i) => {
   if(item.category == "men's clothing"){
    return true
   }
  })
  setSearchProduct(result);
 }else if(category == "women's clothing"){
  let result = searchProduct.filter((item,i) => {
    if(item.category == "women's clothing"){
     return true
    }
   })
   setSearchProduct(result);
  }else if(category == "jewelery"){
    let result = searchProduct.filter((item,i) => {
      if(item.category == "jewelery"){
       return true
      }
     })
     setSearchProduct(result);
    }else if(category == "electronics"){
      let result = searchProduct.filter((item,i) => {
        if(item.category == "electronics"){
         return true
        }
       })
       setSearchProduct(result);
      }else if(category == "ratingHighToLow"){
        let productsCopy = [...searchProduct]
          let result = productsCopy.sort((a,b) =>  {
         return b.rating.rate - a.rating.rate
         })
         setSearchProduct(result);
      }else if(category == "pricesLowToHigh"){
          let productsCopy = [...searchProduct]
          let result = productsCopy.sort((a,b) => {
           return  a.price - b.price
           })
           setSearchProduct(result);
          }else if(category == "pricesHighToLow"){
            let productsCopy = [...searchProduct]
            let result = productsCopy.sort((a,b) => {
             return  b.price - a.price
             })
             setSearchProduct(result);
            }
}    
function ShowAllProduct(){
  setSearchProduct([])
}
  return (
    <>

<div className='latestContainerWrapperr my-2 py-2'>
<div className='row'>
  <div className='col-12 '>
    <h1 className='display-6 fw-bolder text-center'> </h1>
  
</div>
</div>
</div>
      <div className='buttonsStyle d-flex justify-content-center  mb-2 pb-5'>
    <button
    onClick={ () => {
      ShowAllProduct("men's clothing")
    }}
    className='btn btn-outline-dark me-3'>All</button>
    <button
    onClick={ () => {
      showFilteredResults("men's clothing")
    }}
    className='btn btn-outline-dark  me-3' >Men's Clothing</button>
    <button
    onClick={ () => {
      showFilteredResults("women's clothing")
    }}
    className='btn btn-outline-dark  me-3' >Women's Clothing</button>
    <button
    onClick={ () => {
      showFilteredResults("jewelery")
    }}
    className='btn btn-outline-dark  me-3' >Jewelery</button>
    <button 
    onClick={ () => {
      showFilteredResults("electronics")
    }}
    className='btn btn-outline-dark  me-3' >Electronic</button>

<button
  onClick={ () => {
    showFilteredResults("ratingHighToLow")
    }}
    className='btn btn-outline-dark me-3'>Rate High - Low</button> 





<button
  onClick={ () => {
    showFilteredResults("pricesLowToHigh")
    }}
    className='btn btn-outline-dark me-3'> Price Low - High</button>

<button
  onClick={ () => {
    showFilteredResults("pricesHighToLow")
    }}
    className='btn btn-outline-dark me-3'> Price High - Low</button>
</div> 


    
<div class="row  row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-4 productCardWrapper">
{searchProduct.length > 0 ?  searchProduct.map((search,index) => {
                 return  <div 
                className="col mb-4">
                   <div className="card h-100 text-center p-4">
                     <img src={search.image} className="card-img-top product-image" />
                     <div className="card-body">
                       <h5 className="card-title mb-0">{search.title.slice(0,12)}...</h5>
                       <p className='card-text lead fw-bold'> ${search.price}</p>
                       <button 
                        onClick={ () => {
                          navigate(`/Product/${search.id}`)
                        }}
                       type="button" class="btn btn-outline-dark">Buy Now</button>
                <button
                  onClick={ () => {

                  let wishItem = {
                    Title : search?.title,
                    Price : search?.price,
                    Image :  search?.image
                  }
                   dispatch( Wishlist({wishItem}))
                  
                
                  
                }}
                type="button" class="btn btn-dark ms-2 px-3 ">Wishlist</button>
                       
             
                     </div>
                   </div>
                 </div> 
                  }) : <Shimmer/>}
             </div>
  
    </>
  )
}

export default ProductCard;