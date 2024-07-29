import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'


const Update = () => {

 //To  fetch and update the existing data in the fields 
let [product,setProduct]=useState({
  name:"",
  image:"",
  price:"",
  qty:"",
  info:""
 })


 let updateInput=(event)=>{
  setProduct({...product, [event.target.name]:event.target.value})
}


  let p_Id = useParams('id') //useParams is used to get the id from API

useEffect(()=>{
  let url = `http://127.0.0.1:5000/api/products/${p_Id.id}`
  Axios.get(url)
  .then((response)=>{setProduct(response.data)})
  .catch((err)=>{console.log(err)})
},[])

//to post updated details
let [isUpdated,SetisUpdated] = useState(false) // to navigate to Admin on Update Product Click

let updateProduct = (event)=>{
event.preventDefault();
  Axios.put(`http://127.0.0.1:5000/api/products/${p_Id.id}`, product)
  .then((resp)=>{console.log(resp.data)
    SetisUpdated(true) // to navigate to Admin on Update Product Click
  })
  .catch((err)=>{console.log(err)})
}



  return (

    
  <div className="container  mt-5">
    {
    isUpdated ? <><Navigate to="/admin"/></> : <></>
    }
       <div className="row justify-content-center">
        <div className="col-md-5 col-11">
        <div className="card App">
            <div className="card-header bg-primary text-white text-center">
            <h3>Update Product</h3>
            </div>
            <div className="card-body">
            <form onSubmit={updateProduct}>
                <div className='form-group mb-4'>
                    <input name="name" onChange={updateInput} value={product.name}  placeholder='Product Name' type="text" className='form-control' />
                </div>
                <div className='form-group mb-4'>
                    <input name="image"  type="file" className='form-control' />
                </div>
                <div className='form-group mb-4'>
                    <input name="price" value={product.price} onChange={updateInput} placeholder='Price' type="number" className='form-control' />
                </div>
                <div className='form-group mb-4'>
                    <input  name="qty" value={product.qty} onChange={updateInput} placeholder='QTY' type="number" className='form-control' />
                </div>
                <div className='form-group mb-4'>
                    <input name="info" value={product.info} onChange={updateInput} placeholder='Additional Info' type="text" className='form-control' />
                </div>
                <input type="submit" value="Update Product" className='btn btn-primary'/>
            </form>
            </div>
        </div>
           
           <pre>{JSON.stringify(product)}</pre>
        </div>
        {/* <div className="col-md-6">
        <pre>{JSON.stringify(products)}</pre>
        </div> */}
       </div>
       </div>

  )
}

export default Update
