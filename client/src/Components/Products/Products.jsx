import React, { useEffect, useState } from 'react'
import Axios from 'axios';



const Products = () => {
  let [products,setProducts] = useState([])

  useEffect( () => {
      Axios.get('http://127.0.0.1:5000/api/products/')
      .then((response)=>{setProducts(response.data)})  
      .catch((error)=>{console.log(error)})
    }
  )
  return (<>

        <div className="container">
          {/* <pre className='mb-5'>{JSON.stringify(products)}</pre> */}
            <div className="row justify-content-center">
              {
                  products.length>0? <>
                        {
                          products.map((product)=>{
                            return <div className="col-md-3 col-6">
                              <div className="card mt-5 mr-2">
                                <div className="card-header">
                                  <p className='text-center'>{product.info}</p>
                                  <img style={{width:"100%"}} src={product.image} alt="" />
                                  </div>
                                  <div className="card-body">
                                    <h6>Brand: {product.name}</h6>
                                    <h6>Price: {product.price}</h6>
                                    <h6>Quantity: {product.qty}</h6>
                                 
                                  </div>
                              </div>
                            </div>
                          })
                        }
                  </> : <><div><h1 className='text-center'>No data</h1></div></>

              }

            </div>

        </div>

          




    
    
    
    </>
  )
}

export default Products
