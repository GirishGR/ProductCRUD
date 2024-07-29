


import React, { useState } from 'react'
import Axios from 'axios'

const CreateProduct = () => {

  let [products, setProducts] =  useState({ name: "",image: "", price: "", qty: "", info: "" })

  let changeInput = (event)=>{ setProducts({...products, [event.target.name]: event.target.value})  } 

    let changeImage = (event)=>{
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load',()=>{
          if(reader.result){
                setProducts({...products, image:reader.result})
          }
        })
        }

    let handleProduct = (event)=>{
        event.preventDefault();
      let url = 'http://127.0.0.1:5000/api/products/'
      Axios.post(url, products)
      .then((response)=>{
          console.log(response.data)
      })
      .catch((error)=>{
          console.log(error)
      })
    }
  

  return <>
           <div className="container  mt-5">
       <div className="row justify-content-center">
        <div className="col-md-5 col-11">
        <div className="card App">
            <div className="card-header bg-primary text-white text-center">
            <h3>Create New Product</h3>
            </div>
            <div className="card-body">
            <form onSubmit={handleProduct}>
                <div className='form-group mb-4'>
                    <input name="name" onChange={changeInput} placeholder='Product Name' type="text" className='form-control' />
                </div>
                <div className='form-group mb-4'>
                    <input name="image" onChange={changeImage} type="file" className='form-control' />
                </div>
                <div className='form-group mb-4'>
                    <input name="price" onChange={changeInput} placeholder='Price' type="number" className='form-control' />
                </div>
                <div className='form-group mb-4'>
                    <input  name="qty" onChange={changeInput} placeholder='QTY' type="number" className='form-control' />
                </div>
                <div className='form-group mb-4'>
                    <input name="info" onChange={changeInput} placeholder='Additional Info' type="text" className='form-control' />
                </div>
                <input type="submit" value="Create Product" className='btn btn-primary'/>
            </form>
            </div>
        </div>
           
        </div>
        {/* <div className="col-md-6">
        <pre>{JSON.stringify(products)}</pre>
        </div> */}
       </div>
       </div>
      

    </>
  
}

export default CreateProduct
