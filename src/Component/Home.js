import React, { useEffect ,useState} from 'react'
import axios from "axios"
import    './App.css'
import InitialProduct from './InitialProduct'


function Home({productName}) {
  


  let [products,setProducts] = useState([]);
   let [filteredProduct,setFilteredProduct] = useState([])
  
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
          setProducts(res.data)
        } ).catch((err) => {
            console.log(err);
        } )
    }, [] )

    useEffect(() => {
      let filterResult = products.filter( (product,i) => {
       
        if(product.title.toLowerCase().includes(productName.toLowerCase()) == true ||
        product.category.toLowerCase().includes(productName.toLowerCase()) == true){
        return true
       }
      })
      setFilteredProduct(filterResult)
    },[productName])

    console.log(filteredProduct)
  return (
   <>
   <div className='container-fluid'>

<div className='bg-img'>
<div class="card text-white border-0">
<img src="https://acc-media-assets.s3.ap-southeast-1.amazonaws.com/hm_id/vmd/24/03/W14-Ladies-Blue-White-For-Spring-Bhs.jpg" class="card-img" alt="Background" height="570px"/>
<div class="card-img-overlay d-flex flex-column justify-content-center ">
<div className='bgContainer'>
  <h5 class="card-title display-3  mb-0">NEW SEASON ARRIVALS</h5>
<p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
</div>
</div>
</div>
</div>



   <div className='latestContainerWrapper my-5 py-5'>
<div className='row'>
  <div className='col-12 '>
    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
  
</div>
</div>
</div>



 
 <InitialProduct
 productName = {productName}
 filteredProduct = {filteredProduct}
products = {products}
 />  


  </div>
   
   </>

  )
}

export default Home;

