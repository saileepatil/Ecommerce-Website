import React from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {Remove} from './ReducerCart'


function Cart() {

  let  dispatch = useDispatch();  


  let cartItems =  useSelector( (state) => {
   
    return state.cartItems;
  })
  console.log(cartItems);

 let cartPrice = cartItems.reduce( (acc,item,i) => {
  console.log(item);
    return  acc + item.cartItem.Price
  },0)
  


  return (
    <>
      <div className='container mx-auto mt-10'>
    <div className=' display-6 font-semibold  text-gray-600 text-xs uppercase w-1/5  '>Shopping Cart</div>
    <div className='flex mt-10 mb-5'>
<h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center'>Total:{cartPrice} </h3>
</div>      
          
     <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-4">
             {cartItems?.map((item,index) => {
               return   <div className='col mb-4 p-4'>
               <div class="cartImage">
           <img src={item?.cartItem?.Image} class="img-fluid rounded-start" />
        </div>
        <div className='flex flex-col justify-between ml-4 flex-grow'>
          
             <span><h5 class="display-9 sho-Title">{item?.cartItem?.Title} </h5></span>
           <span>  <h4 class="display-8 ">${item?.cartItem?.Price} </h4></span>
             
               <button 
               onClick={ () => {
                dispatch(Remove(index))
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

export default Cart;


