import  {createSlice} from "@reduxjs/toolkit"

let obj = {
    cartItems : [],
    wishItems : []
}

let cartReducer = createSlice({
    name: "cart",
    initialState : obj,
    reducers : {
        AddToCart : (state,action) => {
             state.cartItems.push(action.payload)
        },
        Remove : (state,action) => {
            state.cartItems.splice(action.payload, 1)
        }, 
        Wishlist : (state,action) => {
             state.wishItems.push(action.payload)
       }, 
       RemoveWishlist : (state,action) => {
        state.wishItems.splice(action.payload, 1)
    }
     
      
    }
    
})


 export const {AddToCart,Remove,Wishlist,RemoveWishlist} =  cartReducer.actions;

export default cartReducer.reducer 

               

