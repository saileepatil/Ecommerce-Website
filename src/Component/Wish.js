import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {RemoveWishlist} from "./ReducerCart"

function Wish() {

 let dispatch = useDispatch();

 let  wishItems = useSelector(  (state) => {
    return state.wishItems;
  })
  console.log(wishItems)
  return (
    <>
        <div className='container mx-auto mt-10'>
    <div className=' display-6 text-center font-semibold  text-gray-600 text-xs uppercase w-1/5  '>WishList</div>



    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-4">
             {wishItems?.map((item,index) => {
      console.log(item.wishItems)
          return   <div className='col mb-4 p-4'>
               <div class="cartImage">
           <img src={item?. wishItem?.Image} class="img-fluid rounded-start" />
        </div>
        <div className='flex flex-col justify-between ml-4 flex-grow'>
          
             <span><h5 class="display-9 sho-Title">{item?. wishItem?.Title} </h5></span>
           <span>  <h4 class="display-8 ">${item?. wishItem?.Price} </h4></span>
             
               <button 
                onClick={ () => {
                 dispatch(RemoveWishlist(index))
                } }
               type="button" class="btn btn-dark ms-2 px-3 ">Remove</button>
              </div>
         </div>


     
      })}
      </div>
   </div>
    </>
  )
}

export default Wish;